[root@ip-172-31-19-99 babyapi]# clear












































[root@ip-172-31-19-99 babyapi]# cat /home/ubuntu/crontest.log
Connected to the SQLite database.
[root@ip-172-31-19-99 babyapi]# cat /home/ubuntu/crontest.log
Connected to the SQLite database.
[root@ip-172-31-19-99 babyapi]# cat /home/ubuntu/crontest.log
Connected to the SQLite database.
[root@ip-172-31-19-99 babyapi]# cat /home/ubuntu/crontest.log
Connected to the SQLite database.
[root@ip-172-31-19-99 babyapi]# cat /home/ubuntu/crontest.log
Connected to the SQLite database.
[root@ip-172-31-19-99 babyapi]# cat /home/ubuntu/crontest.log
Connected to the SQLite database.
[root@ip-172-31-19-99 babyapi]# cat /home/ubuntu/crontest.log
Connected to the SQLite database.
[root@ip-172-31-19-99 babyapi]# cat /home/ubuntu/crontest.log
Connected to the SQLite database.
[root@ip-172-31-19-99 babyapi]# cat /home/ubuntu/crontest.log
Connected to the SQLite database.
[root@ip-172-31-19-99 babyapi]# cat /home/ubuntu/crontest.log
Connected to the SQLite database.
[root@ip-172-31-19-99 babyapi]# cat /home/ubuntu/crontest.log
Connected to the SQLite database.
[root@ip-172-31-19-99 babyapi]# cat /home/ubuntu/crontest.log
Connected to the SQLite database.
[root@ip-172-31-19-99 babyapi]# cat /home/ubuntu/crontest.log
Connected to the SQLite database.
[root@ip-172-31-19-99 babyapi]# crontab -l
*/2 * * * * /var/www/babyapi/cron.sh >> /home/ubuntu/crontest.log 2>&1


[root@ip-172-31-19-99 babyapi]# cat /home/ubuntu/crontest.log
Connected to the SQLite database.
[Error: SQLITE_ERROR: no such table: vaults] {
  errno: 1,
  code: 'SQLITE_ERROR'
}
Connected to the SQLite database.
[root@ip-172-31-19-99 babyapi]# cat /home/ubuntu/crontest.log
Connected to the SQLite database.
[Error: SQLITE_ERROR: no such table: vaults] {
  errno: 1,
  code: 'SQLITE_ERROR'
}
Connected to the SQLite database.
[root@ip-172-31-19-99 babyapi]# git pull
remote: Enumerating objects: 11, done.
remote: Counting objects: 100% (11/11), done.
remote: Compressing objects: 100% (2/2), done.
remote: Total 6 (delta 4), reused 6 (delta 4), pack-reused 0
Unpacking objects: 100% (6/6), 663 bytes | 221.00 KiB/s, done.
From https://github.com/CosmoChief/vaults-api
   642bc77..609e325  main       -> origin/main
Updating 642bc77..609e325
error: Your local changes to the following files would be overwritten by merge:
	scripts/update_apr.js
Please commit your changes or stash them before you merge.
Aborting
[root@ip-172-31-19-99 babyapi]# git stash
Saved working directory and index state WIP on main: 642bc77 db
[root@ip-172-31-19-99 babyapi]# git pull
Updating 642bc77..609e325
Fast-forward
 scripts/update_apr.js   | 14 ++++++++++++--
 scripts/update_icons.js |  2 +-
 scripts/update_tvl.js   |  2 +-
 3 files changed, 14 insertions(+), 4 deletions(-)
[root@ip-172-31-19-99 babyapi]# cat /home/ubuntu/crontest.log
Connected to the SQLite database.
[Error: SQLITE_ERROR: no such table: vaults] {
  errno: 1,
  code: 'SQLITE_ERROR'
}
Connected to the SQLite database.
[root@ip-172-31-19-99 babyapi]# cat /home/ubuntu/crontest.log
Connected to the SQLite database.
[Error: SQLITE_ERROR: no such table: vaults] {
  errno: 1,
  code: 'SQLITE_ERROR'
}
Connected to the SQLite database.
[root@ip-172-31-19-99 babyapi]# service crond status
Redirecting to /bin/systemctl status crond.service
● crond.service - Command Scheduler
   Loaded: loaded (/usr/lib/systemd/system/crond.service; enabled; vendor preset: enabled)
   Active: active (running) since Tue 2021-11-09 20:50:18 UTC; 8min ago
 Main PID: 30854 (crond)
   CGroup: /system.slice/crond.service
           └─30854 /usr/sbin/crond -n

Nov 09 20:50:18 ip-172-31-19-99.us-east-2.compute.internal systemd[1]: Started Command Scheduler.
Nov 09 20:50:18 ip-172-31-19-99.us-east-2.compute.internal crond[30854]: (CRON) INFO (RANDOM_DELAY will be scaled with factor 99% if used.)
Nov 09 20:50:18 ip-172-31-19-99.us-east-2.compute.internal crond[30854]: (CRON) INFO (running with inotify support)
Nov 09 20:50:18 ip-172-31-19-99.us-east-2.compute.internal crond[30854]: (CRON) INFO (@reboot jobs will be run at computer's startup.)
Nov 09 20:51:01 ip-172-31-19-99.us-east-2.compute.internal crond[30854]: (root) RELOAD (/var/spool/cron/root)
[root@ip-172-31-19-99 babyapi]# service crond status
Redirecting to /bin/systemctl status crond.service
● crond.service - Command Scheduler
   Loaded: loaded (/usr/lib/systemd/system/crond.service; enabled; vendor preset: enabled)
   Active: active (running) since Tue 2021-11-09 20:50:18 UTC; 8min ago
 Main PID: 30854 (crond)
   CGroup: /system.slice/crond.service
           └─30854 /usr/sbin/crond -n

Nov 09 20:50:18 ip-172-31-19-99.us-east-2.compute.internal systemd[1]: Started Command Scheduler.
Nov 09 20:50:18 ip-172-31-19-99.us-east-2.compute.internal crond[30854]: (CRON) INFO (RANDOM_DELAY will be scaled with factor 99% if used.)
Nov 09 20:50:18 ip-172-31-19-99.us-east-2.compute.internal crond[30854]: (CRON) INFO (running with inotify support)
Nov 09 20:50:18 ip-172-31-19-99.us-east-2.compute.internal crond[30854]: (CRON) INFO (@reboot jobs will be run at computer's startup.)
Nov 09 20:51:01 ip-172-31-19-99.us-east-2.compute.internal crond[30854]: (root) RELOAD (/var/spool/cron/root)
[root@ip-172-31-19-99 babyapi]# service crond status
Redirecting to /bin/systemctl status crond.service
● crond.service - Command Scheduler
   Loaded: loaded (/usr/lib/systemd/system/crond.service; enabled; vendor preset: enabled)
   Active: active (running) since Tue 2021-11-09 20:50:18 UTC; 8min ago
 Main PID: 30854 (crond)
   CGroup: /system.slice/crond.service
           └─30854 /usr/sbin/crond -n

Nov 09 20:50:18 ip-172-31-19-99.us-east-2.compute.internal systemd[1]: Started Command Scheduler.
Nov 09 20:50:18 ip-172-31-19-99.us-east-2.compute.internal crond[30854]: (CRON) INFO (RANDOM_DELAY will be scaled with factor 99% if used.)
Nov 09 20:50:18 ip-172-31-19-99.us-east-2.compute.internal crond[30854]: (CRON) INFO (running with inotify support)
Nov 09 20:50:18 ip-172-31-19-99.us-east-2.compute.internal crond[30854]: (CRON) INFO (@reboot jobs will be run at computer's startup.)
Nov 09 20:51:01 ip-172-31-19-99.us-east-2.compute.internal crond[30854]: (root) RELOAD (/var/spool/cron/root)
[root@ip-172-31-19-99 babyapi]# service crond stop
Redirecting to /bin/systemctl stop crond.service
[root@ip-172-31-19-99 babyapi]# service crond start
Redirecting to /bin/systemctl start crond.service
[root@ip-172-31-19-99 babyapi]# cat /home/ubuntu/crontest.log
Connected to the SQLite database.
[Error: SQLITE_ERROR: no such table: vaults] {
  errno: 1,
  code: 'SQLITE_ERROR'
}
Connected to the SQLite database.
[root@ip-172-31-19-99 babyapi]# cat /home/ubuntu/crontest.log
Connected to the SQLite database.
[Error: SQLITE_ERROR: no such table: vaults] {
  errno: 1,
  code: 'SQLITE_ERROR'
}
Connected to the SQLite database.
[root@ip-172-31-19-99 babyapi]# > /home/ubuntu/crontest.log
[root@ip-172-31-19-99 babyapi]# cat /home/ubuntu/crontest.log
[root@ip-172-31-19-99 babyapi]# cat /home/ubuntu/crontest.log
[root@ip-172-31-19-99 babyapi]# service crond start
Redirecting to /bin/systemctl start crond.service
[root@ip-172-31-19-99 babyapi]# service crond status
Redirecting to /bin/systemctl status crond.service
● crond.service - Command Scheduler
   Loaded: loaded (/usr/lib/systemd/system/crond.service; enabled; vendor preset: enabled)
   Active: active (running) since Tue 2021-11-09 20:58:57 UTC; 32s ago
 Main PID: 31261 (crond)
   CGroup: /system.slice/crond.service
           └─31261 /usr/sbin/crond -n

Nov 09 20:58:57 ip-172-31-19-99.us-east-2.compute.internal systemd[1]: Started Command Scheduler.
Nov 09 20:58:57 ip-172-31-19-99.us-east-2.compute.internal crond[31261]: (CRON) INFO (RANDOM_DELAY will be scaled with factor 94% if used.)
Nov 09 20:58:57 ip-172-31-19-99.us-east-2.compute.internal crond[31261]: (CRON) INFO (running with inotify support)
Nov 09 20:58:57 ip-172-31-19-99.us-east-2.compute.internal crond[31261]: (CRON) INFO (@reboot jobs will be run at computer's startup.)
[root@ip-172-31-19-99 babyapi]# cat /home/ubuntu/crontest.log
[root@ip-172-31-19-99 babyapi]# cat /home/ubuntu/crontest.log
[root@ip-172-31-19-99 babyapi]# cat /home/ubuntu/crontest.log
[root@ip-172-31-19-99 babyapi]# cat /home/ubuntu/crontest.log
[root@ip-172-31-19-99 babyapi]# cat /home/ubuntu/crontest.log
[root@ip-172-31-19-99 babyapi]# cat /home/ubuntu/crontest.log
[root@ip-172-31-19-99 babyapi]# cat /home/ubuntu/crontest.log
[root@ip-172-31-19-99 babyapi]# cat /home/ubuntu/crontest.log
[root@ip-172-31-19-99 babyapi]# cat /home/ubuntu/crontest.log
[root@ip-172-31-19-99 babyapi]# cat /home/ubuntu/crontest.log
[root@ip-172-31-19-99 babyapi]#
[root@ip-172-31-19-99 babyapi]# cat /home/ubuntu/crontest.log
[root@ip-172-31-19-99 babyapi]# service crond status
Redirecting to /bin/systemctl status crond.service
● crond.service - Command Scheduler
   Loaded: loaded (/usr/lib/systemd/system/crond.service; enabled; vendor preset: enabled)
   Active: active (running) since Tue 2021-11-09 20:58:57 UTC; 1min 5s ago
 Main PID: 31261 (crond)
   CGroup: /system.slice/crond.service
           └─31261 /usr/sbin/crond -n

Nov 09 20:58:57 ip-172-31-19-99.us-east-2.compute.internal systemd[1]: Started Command Scheduler.
Nov 09 20:58:57 ip-172-31-19-99.us-east-2.compute.internal crond[31261]: (CRON) INFO (RANDOM_DELAY will be scaled with factor 94% if used.)
Nov 09 20:58:57 ip-172-31-19-99.us-east-2.compute.internal crond[31261]: (CRON) INFO (running with inotify support)
Nov 09 20:58:57 ip-172-31-19-99.us-east-2.compute.internal crond[31261]: (CRON) INFO (@reboot jobs will be run at computer's startup.)
[root@ip-172-31-19-99 babyapi]# service crond status
Redirecting to /bin/systemctl status crond.service
● crond.service - Command Scheduler
   Loaded: loaded (/usr/lib/systemd/system/crond.service; enabled; vendor preset: enabled)
   Active: active (running) since Tue 2021-11-09 20:58:57 UTC; 1min 22s ago
 Main PID: 31261 (crond)
   CGroup: /system.slice/crond.service
           └─31261 /usr/sbin/crond -n

Nov 09 20:58:57 ip-172-31-19-99.us-east-2.compute.internal systemd[1]: Started Command Scheduler.
Nov 09 20:58:57 ip-172-31-19-99.us-east-2.compute.internal crond[31261]: (CRON) INFO (RANDOM_DELAY will be scaled with factor 94% if used.)
Nov 09 20:58:57 ip-172-31-19-99.us-east-2.compute.internal crond[31261]: (CRON) INFO (running with inotify support)
Nov 09 20:58:57 ip-172-31-19-99.us-east-2.compute.internal crond[31261]: (CRON) INFO (@reboot jobs will be run at computer's startup.)
[root@ip-172-31-19-99 babyapi]# service crond status
Redirecting to /bin/systemctl status crond.service
● crond.service - Command Scheduler
   Loaded: loaded (/usr/lib/systemd/system/crond.service; enabled; vendor preset: enabled)
   Active: active (running) since Tue 2021-11-09 20:58:57 UTC; 1min 41s ago
 Main PID: 31261 (crond)
   CGroup: /system.slice/crond.service
           └─31261 /usr/sbin/crond -n

Nov 09 20:58:57 ip-172-31-19-99.us-east-2.compute.internal systemd[1]: Started Command Scheduler.
Nov 09 20:58:57 ip-172-31-19-99.us-east-2.compute.internal crond[31261]: (CRON) INFO (RANDOM_DELAY will be scaled with factor 94% if used.)
Nov 09 20:58:57 ip-172-31-19-99.us-east-2.compute.internal crond[31261]: (CRON) INFO (running with inotify support)
Nov 09 20:58:57 ip-172-31-19-99.us-east-2.compute.internal crond[31261]: (CRON) INFO (@reboot jobs will be run at computer's startup.)
[root@ip-172-31-19-99 babyapi]# service crond status
Redirecting to /bin/systemctl status crond.service
● crond.service - Command Scheduler
   Loaded: loaded (/usr/lib/systemd/system/crond.service; enabled; vendor preset: enabled)
   Active: active (running) since Tue 2021-11-09 20:58:57 UTC; 1min 44s ago
 Main PID: 31261 (crond)
   CGroup: /system.slice/crond.service
           └─31261 /usr/sbin/crond -n

Nov 09 20:58:57 ip-172-31-19-99.us-east-2.compute.internal systemd[1]: Started Command Scheduler.
Nov 09 20:58:57 ip-172-31-19-99.us-east-2.compute.internal crond[31261]: (CRON) INFO (RANDOM_DELAY will be scaled with factor 94% if used.)
Nov 09 20:58:57 ip-172-31-19-99.us-east-2.compute.internal crond[31261]: (CRON) INFO (running with inotify support)
Nov 09 20:58:57 ip-172-31-19-99.us-east-2.compute.internal crond[31261]: (CRON) INFO (@reboot jobs will be run at computer's startup.)
[root@ip-172-31-19-99 babyapi]# service crond status
Redirecting to /bin/systemctl status crond.service
● crond.service - Command Scheduler
   Loaded: loaded (/usr/lib/systemd/system/crond.service; enabled; vendor preset: enabled)
   Active: active (running) since Tue 2021-11-09 20:58:57 UTC; 1min 54s ago
 Main PID: 31261 (crond)
   CGroup: /system.slice/crond.service
           └─31261 /usr/sbin/crond -n

Nov 09 20:58:57 ip-172-31-19-99.us-east-2.compute.internal systemd[1]: Started Command Scheduler.
Nov 09 20:58:57 ip-172-31-19-99.us-east-2.compute.internal crond[31261]: (CRON) INFO (RANDOM_DELAY will be scaled with factor 94% if used.)
Nov 09 20:58:57 ip-172-31-19-99.us-east-2.compute.internal crond[31261]: (CRON) INFO (running with inotify support)
Nov 09 20:58:57 ip-172-31-19-99.us-east-2.compute.internal crond[31261]: (CRON) INFO (@reboot jobs will be run at computer's startup.)
[root@ip-172-31-19-99 babyapi]# service crond status
Redirecting to /bin/systemctl status crond.service
● crond.service - Command Scheduler
   Loaded: loaded (/usr/lib/systemd/system/crond.service; enabled; vendor preset: enabled)
   Active: active (running) since Tue 2021-11-09 20:58:57 UTC; 1min 56s ago
 Main PID: 31261 (crond)
   CGroup: /system.slice/crond.service
           └─31261 /usr/sbin/crond -n

Nov 09 20:58:57 ip-172-31-19-99.us-east-2.compute.internal systemd[1]: Started Command Scheduler.
Nov 09 20:58:57 ip-172-31-19-99.us-east-2.compute.internal crond[31261]: (CRON) INFO (RANDOM_DELAY will be scaled with factor 94% if used.)
Nov 09 20:58:57 ip-172-31-19-99.us-east-2.compute.internal crond[31261]: (CRON) INFO (running with inotify support)
Nov 09 20:58:57 ip-172-31-19-99.us-east-2.compute.internal crond[31261]: (CRON) INFO (@reboot jobs will be run at computer's startup.)
[root@ip-172-31-19-99 babyapi]# service crond status
Redirecting to /bin/systemctl status crond.service
● crond.service - Command Scheduler
   Loaded: loaded (/usr/lib/systemd/system/crond.service; enabled; vendor preset: enabled)
   Active: active (running) since Tue 2021-11-09 20:58:57 UTC; 2min 1s ago
 Main PID: 31261 (crond)
   CGroup: /system.slice/crond.service
           └─31261 /usr/sbin/crond -n

Nov 09 20:58:57 ip-172-31-19-99.us-east-2.compute.internal systemd[1]: Started Command Scheduler.
Nov 09 20:58:57 ip-172-31-19-99.us-east-2.compute.internal crond[31261]: (CRON) INFO (RANDOM_DELAY will be scaled with factor 94% if used.)
Nov 09 20:58:57 ip-172-31-19-99.us-east-2.compute.internal crond[31261]: (CRON) INFO (running with inotify support)
Nov 09 20:58:57 ip-172-31-19-99.us-east-2.compute.internal crond[31261]: (CRON) INFO (@reboot jobs will be run at computer's startup.)
[root@ip-172-31-19-99 babyapi]# cat /home/ubuntu/crontest.log
Connected to the SQLite database.
[Error: SQLITE_ERROR: no such table: vaults] {
  errno: 1,
  code: 'SQLITE_ERROR'
}
Connected to the SQLite database.
[root@ip-172-31-19-99 babyapi]# git pull
remote: Enumerating objects: 13, done.
remote: Counting objects: 100% (13/13), done.
remote: Compressing objects: 100% (2/2), done.
remote: Total 7 (delta 5), reused 7 (delta 5), pack-reused 0
Unpacking objects: 100% (7/7), 606 bytes | 202.00 KiB/s, done.
From https://github.com/CosmoChief/vaults-api
   609e325..68a7395  main       -> origin/main
Updating 609e325..68a7395
Fast-forward
 database.js             | 2 +-
 scripts/update_apr.js   | 2 +-
 scripts/update_icons.js | 2 +-
 scripts/update_tvl.js   | 3 +--
 4 files changed, 4 insertions(+), 5 deletions(-)
[root@ip-172-31-19-99 babyapi]# cat /home/ubuntu/crontest.log
Connected to the SQLite database.
[Error: SQLITE_ERROR: no such table: vaults] {
  errno: 1,
  code: 'SQLITE_ERROR'
}
Connected to the SQLite database.
[root@ip-172-31-19-99 babyapi]# cat /home/ubuntu/crontest.log
Connected to the SQLite database.
[Error: SQLITE_ERROR: no such table: vaults] {
  errno: 1,
  code: 'SQLITE_ERROR'
}
Connected to the SQLite database.
[root@ip-172-31-19-99 babyapi]# service crond status
Redirecting to /bin/systemctl status crond.service
● crond.service - Command Scheduler
   Loaded: loaded (/usr/lib/systemd/system/crond.service; enabled; vendor preset: enabled)
   Active: active (running) since Tue 2021-11-09 20:58:57 UTC; 4min 24s ago
 Main PID: 31261 (crond)
   CGroup: /system.slice/crond.service
           └─31261 /usr/sbin/crond -n

Nov 09 20:58:57 ip-172-31-19-99.us-east-2.compute.internal systemd[1]: Started Command Scheduler.
Nov 09 20:58:57 ip-172-31-19-99.us-east-2.compute.internal crond[31261]: (CRON) INFO (RANDOM_DELAY will be scaled with factor 94% if used.)
Nov 09 20:58:57 ip-172-31-19-99.us-east-2.compute.internal crond[31261]: (CRON) INFO (running with inotify support)
Nov 09 20:58:57 ip-172-31-19-99.us-east-2.compute.internal crond[31261]: (CRON) INFO (@reboot jobs will be run at computer's startup.)
[root@ip-172-31-19-99 babyapi]# service crond status
Redirecting to /bin/systemctl status crond.service
● crond.service - Command Scheduler
   Loaded: loaded (/usr/lib/systemd/system/crond.service; enabled; vendor preset: enabled)
   Active: active (running) since Tue 2021-11-09 20:58:57 UTC; 4min 28s ago
 Main PID: 31261 (crond)
   CGroup: /system.slice/crond.service
           └─31261 /usr/sbin/crond -n

Nov 09 20:58:57 ip-172-31-19-99.us-east-2.compute.internal systemd[1]: Started Command Scheduler.
Nov 09 20:58:57 ip-172-31-19-99.us-east-2.compute.internal crond[31261]: (CRON) INFO (RANDOM_DELAY will be scaled with factor 94% if used.)
Nov 09 20:58:57 ip-172-31-19-99.us-east-2.compute.internal crond[31261]: (CRON) INFO (running with inotify support)
Nov 09 20:58:57 ip-172-31-19-99.us-east-2.compute.internal crond[31261]: (CRON) INFO (@reboot jobs will be run at computer's startup.)
[root@ip-172-31-19-99 babyapi]# service crond status
Redirecting to /bin/systemctl status crond.service
● crond.service - Command Scheduler
   Loaded: loaded (/usr/lib/systemd/system/crond.service; enabled; vendor preset: enabled)
   Active: active (running) since Tue 2021-11-09 20:58:57 UTC; 5min ago
 Main PID: 31261 (crond)
   CGroup: /system.slice/crond.service
           └─31261 /usr/sbin/crond -n

Nov 09 20:58:57 ip-172-31-19-99.us-east-2.compute.internal systemd[1]: Started Command Scheduler.
Nov 09 20:58:57 ip-172-31-19-99.us-east-2.compute.internal crond[31261]: (CRON) INFO (RANDOM_DELAY will be scaled with factor 94% if used.)
Nov 09 20:58:57 ip-172-31-19-99.us-east-2.compute.internal crond[31261]: (CRON) INFO (running with inotify support)
Nov 09 20:58:57 ip-172-31-19-99.us-east-2.compute.internal crond[31261]: (CRON) INFO (@reboot jobs will be run at computer's startup.)
[root@ip-172-31-19-99 babyapi]# service crond status
Redirecting to /bin/systemctl status crond.service
● crond.service - Command Scheduler
   Loaded: loaded (/usr/lib/systemd/system/crond.service; enabled; vendor preset: enabled)
   Active: active (running) since Tue 2021-11-09 20:58:57 UTC; 5min ago
 Main PID: 31261 (crond)
   CGroup: /system.slice/crond.service
           └─31261 /usr/sbin/crond -n

Nov 09 20:58:57 ip-172-31-19-99.us-east-2.compute.internal systemd[1]: Started Command Scheduler.
Nov 09 20:58:57 ip-172-31-19-99.us-east-2.compute.internal crond[31261]: (CRON) INFO (RANDOM_DELAY will be scaled with factor 94% if used.)
Nov 09 20:58:57 ip-172-31-19-99.us-east-2.compute.internal crond[31261]: (CRON) INFO (running with inotify support)
Nov 09 20:58:57 ip-172-31-19-99.us-east-2.compute.internal crond[31261]: (CRON) INFO (@reboot jobs will be run at computer's startup.)
[root@ip-172-31-19-99 babyapi]# service crond status
Redirecting to /bin/systemctl status crond.service
● crond.service - Command Scheduler
   Loaded: loaded (/usr/lib/systemd/system/crond.service; enabled; vendor preset: enabled)
   Active: active (running) since Tue 2021-11-09 20:58:57 UTC; 5min ago
 Main PID: 31261 (crond)
   CGroup: /system.slice/crond.service
           └─31261 /usr/sbin/crond -n

Nov 09 20:58:57 ip-172-31-19-99.us-east-2.compute.internal systemd[1]: Started Command Scheduler.
Nov 09 20:58:57 ip-172-31-19-99.us-east-2.compute.internal crond[31261]: (CRON) INFO (RANDOM_DELAY will be scaled with factor 94% if used.)
Nov 09 20:58:57 ip-172-31-19-99.us-east-2.compute.internal crond[31261]: (CRON) INFO (running with inotify support)
Nov 09 20:58:57 ip-172-31-19-99.us-east-2.compute.internal crond[31261]: (CRON) INFO (@reboot jobs will be run at computer's startup.)
[root@ip-172-31-19-99 babyapi]# service crond status
Redirecting to /bin/systemctl status crond.service
● crond.service - Command Scheduler
   Loaded: loaded (/usr/lib/systemd/system/crond.service; enabled; vendor preset: enabled)
   Active: active (running) since Tue 2021-11-09 20:58:57 UTC; 5min ago
 Main PID: 31261 (crond)
   CGroup: /system.slice/crond.service
           └─31261 /usr/sbin/crond -n

Nov 09 20:58:57 ip-172-31-19-99.us-east-2.compute.internal systemd[1]: Started Command Scheduler.
Nov 09 20:58:57 ip-172-31-19-99.us-east-2.compute.internal crond[31261]: (CRON) INFO (RANDOM_DELAY will be scaled with factor 94% if used.)
Nov 09 20:58:57 ip-172-31-19-99.us-east-2.compute.internal crond[31261]: (CRON) INFO (running with inotify support)
Nov 09 20:58:57 ip-172-31-19-99.us-east-2.compute.internal crond[31261]: (CRON) INFO (@reboot jobs will be run at computer's startup.)
[root@ip-172-31-19-99 babyapi]# git pull
Already up to date.
[root@ip-172-31-19-99 babyapi]#
[root@ip-172-31-19-99 babyapi]# cat /home/ubuntu/crontest.log
Connected to the SQLite database.
---APR---
9519.741545907342
1586.6235909845568
------
156.42857142857144
------
---APR--LP--SAME-
999.1348452475903
1
------
60780.703085895075
------
---APR--LP--SAME-
8727.81038027908
1
------
455092.9698288377
------
---APR--LP--SAME-
1498.7022678713854
1
------
39073.30912664683
------
true false
-----BOOOOM>>>
---APR--LP--SAME-
299.7404535742771
553238.474833377
------
0.028250608664493075
------
true true
-----BOOOOM>>>
---APR---
199.82696904951806
99.91348452475903
------
14.313725490196079
------
ready for some reqs -> stake is lp
---APR---
187.4543435749614
1991133603.025581
------
0.000008590688653550621
------
got price stake 0
ready for some reqs for apr
got price stake 0
got price stake 1
got price stake 1
got price reward 0
got price reward 0
got price reward 1
Will calgot price reward 0
got price reward 1
---APR--BOTH--LP--
12503.97193345933
1
------
507105.5284125173
------
Added
d
Connected to the SQLite database.
0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c
https://api.pancakeswap.info/api/v2/tokens/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c
9519.741545907342
11106.365136891898
------
GOOOOOOOOOOOO
GOOOOOOOOOOOO
0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c
0x55d398326f99059ff775485246999027b3197955
https://api.pancakeswap.info/api/v2/tokens/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c
https://api.pancakeswap.info/api/v2/tokens/0x55d398326f99059ff775485246999027b3197955
Reward total
999.1348452475903
Staked total
0
------
0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c
0xc748673057861a797275cd8a068abb95a902e8de
https://api.pancakeswap.info/api/v2/tokens/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c
https://api.pancakeswap.info/api/v2/tokens/0xc748673057861a797275cd8a068abb95a902e8de
Reward total
8735.344339934127
Staked total
0
------
true false
-----BOOOOM>>>
asdasdasdasdas
true true
-----BOOOOM>>>
0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c
0x55d398326f99059ff775485246999027b3197955
https://api.pancakeswap.info/api/v2/tokens/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c
https://api.pancakeswap.info/api/v2/tokens/0x55d398326f99059ff775485246999027b3197955
Reward total
1498.7022678713854
Staked total
0
------
0x55d398326f99059ff775485246999027b3197955
https://api.pancakeswap.info/api/v2/tokens/0x55d398326f99059ff775485246999027b3197955
199.8982920304079
299.84743804561185
------
0xc748673057861a797275cd8a068abb95a902e8de
0x55d398326f99059ff775485246999027b3197955
https://api.pancakeswap.info/api/v2/tokens/0xc748673057861a797275cd8a068abb95a902e8de
https://api.pancakeswap.info/api/v2/tokens/0x55d398326f99059ff775485246999027b3197955
Reward total
299.7404535742771
Staked total
552761.3240552491
------
ready for some reqs -> stake is lp
got price stake 0
got price stake 1
got price reward 0
got price reward 1
Will calculate price
price stake total1.138506545638023e-12
Added
1992146688.99992 1500000.0
---LP---
249285.0224448912
------
ready for some reqs
got price stake 0
got price stake 1
got price reward 0
got price reward 1
Will calculate price
Added
[root@ip-172-31-19-99 babyapi]# nano cron.sh
[root@ip-172-31-19-99 babyapi]# nano cron.sh
[root@ip-172-31-19-99 babyapi]# > /home/ubuntu/crontest.log
[root@ip-172-31-19-99 babyapi]# tail -f /home/ubuntu/crontest.log





Connected to the SQLite database.
---APR---
9519.741545907342
1586.6235909845568
------
156.42857142857144
------
---APR--LP--SAME-
999.4914601520395
1
------
60802.39715924906
------
---APR--LP--SAME-
8735.344339934127
1
------
455485.8120108509
------
true false
-----BOOOOM>>>
---APR--LP--SAME-
1499.2371902280593
1
------
39087.255316660114
------
true true
-----BOOOOM>>>
---APR--LP--SAME-
299.84743804561185
553238.474833377
------
0.02826069197622766
------
---APR---
199.67086378621713
99.83543189310856
------
14.313725490196079
------
ready for some reqs -> stake is lp
got price stake 0
got price stake 1
got price reward 0
got price reward 1
Will calculate price
Added
---APR---
187.57612533614622
1991133603.025581
------
0.00000859626968823922
------
d
ready for some reqs for apr
got price stake 0
got price stake 1
got price reward 0
got price reward 1
---APR--BOTH--LP--
12505.075022409748
1
------
507150.2647977287
------
Added
Connected to the SQLite database.
0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c
https://api.pancakeswap.info/api/v2/tokens/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c
9519.741545907342
11106.365136891898
------
GOOOOOOOOOOOO
GOOOOOOOOOOOO
0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c
0x55d398326f99059ff775485246999027b3197955
https://api.pancakeswap.info/api/v2/tokens/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c
https://api.pancakeswap.info/api/v2/tokens/0x55d398326f99059ff775485246999027b3197955
Reward total
998.3543189310856
Staked total
0
------
0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c
0xc748673057861a797275cd8a068abb95a902e8de
https://api.pancakeswap.info/api/v2/tokens/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c
https://api.pancakeswap.info/api/v2/tokens/0xc748673057861a797275cd8a068abb95a902e8de
Reward total
8735.344339934127
Staked total
0
------
true false
-----BOOOOM>>>
asdasdasdasdas
true true
-----BOOOOM>>>
0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c
0x55d398326f99059ff775485246999027b3197955
https://api.pancakeswap.info/api/v2/tokens/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c
https://api.pancakeswap.info/api/v2/tokens/0x55d398326f99059ff775485246999027b3197955
Reward total
1499.2371902280593
Staked total
0
------
0xc748673057861a797275cd8a068abb95a902e8de
0x55d398326f99059ff775485246999027b3197955
https://api.pancakeswap.info/api/v2/tokens/0xc748673057861a797275cd8a068abb95a902e8de
https://api.pancakeswap.info/api/v2/tokens/0x55d398326f99059ff775485246999027b3197955
Reward total
299.84743804561185
Staked total
553238.474833377
------
0x55d398326f99059ff775485246999027b3197955
https://api.pancakeswap.info/api/v2/tokens/0x55d398326f99059ff775485246999027b3197955
199.8982920304079
299.84743804561185
------
ready for some reqs -> stake is lp
got price stake 0
got price stake 1
got price reward 0
got price reward 1
Will calculate price
price stake total1.138506545638023e-12
Added
1992146688.99992 1500000.0
---LP---
249307.0141412279
------
ready for some reqs
got price stake 0
got price stake 1
got price reward 0
got price reward 1
Will calculate price
Added
^C
[root@ip-172-31-19-99 babyapi]# cat cron.sh
#!/usr/bin/env sh
/root/.nvm/versions/node/v16.6.2/bin/node /var/www/babyapi/scripts/update_apr.js > /home/ubuntu/crontest.log && /root/.nvm/versions/node/v16.6.2/bin/node /var/www/babyapi/scripts/update_tvl.js && sudo cp -R /var/www/babyapi/scripts/icons/* /var/www/babyvaults/public/icons && cp -R /var/www/babyapi/scripts/icons/* /var/www/babyvaults/public/icons
[root@ip-172-31-19-99 babyapi]# cp -R /var/www/babyapi/scripts/icons/* /var/www/babyvaults/public/icons
cp: overwrite '/var/www/babyvaults/public/icons/0x55d398326f99059ff775485246999027b3197955.png'? ^[[A^C
[root@ip-172-31-19-99 babyapi]# cp -rf /var/www/babyapi/scripts/icons/* /var/www/babyvaults/public/icons
cp: overwrite '/var/www/babyvaults/public/icons/0x55d398326f99059ff775485246999027b3197955.png'?
cp: overwrite '/var/www/babyvaults/public/icons/0x9224c6e69c2237c9620eb1f4b7cbb8e53d21ea46.png'?
cp: overwrite '/var/www/babyvaults/public/icons/0xae13d989dac2f0debff460ac112a837c89baa7cd.png'?
cp: overwrite '/var/www/babyvaults/public/icons/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c.png'?
cp: overwrite '/var/www/babyvaults/public/icons/0xc748673057861a797275cd8a068abb95a902e8de.png'?
cp: overwrite '/var/www/babyvaults/public/icons/0xfF6AB02b94a830a9f8d2272001c2adA7C8035068.png'? ^C
[root@ip-172-31-19-99 babyapi]# cp -fR /var/www/babyapi/scripts/icons/* /var/www/babyvaults/public/icons
cp: overwrite '/var/www/babyvaults/public/icons/0x55d398326f99059ff775485246999027b3197955.png'? ^X^Z
[7]+  Stopped                 cp -i -fR /var/www/babyapi/scripts/icons/* /var/www/babyvaults/public/icons
[root@ip-172-31-19-99 babyapi]# cp -ru /var/www/babyapi/scripts/icons/* /var/www/babyvaults/public/icons
[root@ip-172-31-19-99 babyapi]# yes | cp -R /var/www/babyapi/scripts/icons/* /var/www/babyvaults/public/icons
cp: overwrite '/var/www/babyvaults/public/icons/0x55d398326f99059ff775485246999027b3197955.png'? cp: overwrite '/var/www/babyvaults/public/icons/0x9224c6e69c2237c9620eb1f4b7cbb8e53d21ea46.png'? cp: overwrite '/var/www/babyvaults/public/icons/0xae13d989dac2f0debff460ac112a837c89baa7cd.png'? cp: overwrite '/var/www/babyvaults/public/icons/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c.png'? cp: overwrite '/var/www/babyvaults/public/icons/0xc748673057861a797275cd8a068abb95a902e8de.png'? cp: overwrite '/var/www/babyvaults/public/icons/0xfF6AB02b94a830a9f8d2272001c2adA7C8035068.png'? [root@ip-172-31-19-99 babyapi]# yes | cp -R /vcat /home/ubuntu/crontest.log
[root@ip-172-31-19-99 babyapi]# nano cron.sh
[root@ip-172-31-19-99 babyapi]# nano cron.sh











































  GNU nano 2.9.8                                                          cron.sh

#!/usr/bin/env sh
$/scripts/update_tvl.js &&  /root/.nvm/versions/node/v16.6.2/bin/node /var/www/babyapi/scripts/update_icons.js  && yes | cp -R /var/www/babyapi/scri$






































                                                                  [ Wrote 2 lines ]
^G Get Help     ^O Write Out    ^W Where Is     ^K Cut Text     ^J Justify      ^C Cur Pos      M-U Undo        M-A Mark Text   M-] To Bracket
^X Exit         ^R Read File    ^\ Replace      ^U Uncut Text   ^T To Linter    ^_ Go To Line   M-E Redo        M-6 Copy Text   M-W WhereIs Next
