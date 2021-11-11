#!/usr/bin/env sh
/root/.nvm/versions/node/v16.6.2/bin/node /var/www/babyapi/scripts/update_apr.js && /root/.nvm/versions/node/v16.6.2/bin/node /var/www/babyapi/scripts/update_tvl.js &&  /root/.nvm/versions/node/v16.6.2/bin/node /var/www/babyapi/scripts/update_icons.js  && yes | cp -R /var/www/babyapi/scripts/icons/* /var/www/babyvaults/public/icons
