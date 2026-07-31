#!/bin/sh

grep -RIn \
  --include='*.html' \
  --include='*.js' \
  --exclude-dir=.git \
  --exclude-dir=fossili \
  --exclude-dir=fonti-storiche \
  -E "UA-[0-9-]+|ga\(|GoogleAnalyticsObject|APEtracker|google-analytics\.com/analytics\.js" \
  .
