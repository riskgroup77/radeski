import os
import paramiko

pwd = os.environ["RADESKI_DEPLOY_PASSWORD"]
c = paramiko.SSHClient()
c.set_missing_host_key_policy(paramiko.AutoAddPolicy())
c.connect("161.35.107.0", username="root", password=pwd, timeout=30)

cmds = [
    "cat /etc/nginx/sites-available/radeski.uz",
    "curl -sk https://radeski.uz/api/chat-health",
    """curl -sk -X POST https://radeski.uz/api/chat -H 'Content-Type: application/json' -d '{"locale":"uz","messages":[{"role":"user","content":"salom"}]}'""",
    "curl -sk -X POST https://radeski.uz/api/chat-health",
    "cat /var/www/radeski/.env",
    "journalctl -u radeski-chat -n 15 --no-pager",
]

for cmd in cmds:
    print("\n===", cmd[:100], "===")
    _, o, e = c.exec_command(cmd)
    print(o.read().decode("utf-8", "replace")[:2000])
    err = e.read().decode("utf-8", "replace")
    if err.strip():
        print("ERR:", err[:500])

c.close()
