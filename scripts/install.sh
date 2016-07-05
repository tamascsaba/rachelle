# Install version of npm that we are locked against
npm install -g npm@3.10.4

# Install Chromium

./scripts/ci/install_chromium.sh

# node tools/chromedriverpatch.js
$(npm bin)/webdriver-manager update