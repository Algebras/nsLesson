#!/usr/bin/env bash
# prepare.sh - sets up everything needed for the React and APIs class.
# Mac:      open Terminal, then run   bash prepare.sh
# Windows:  open PowerShell, then run bash prepare.sh   (needs Git for Windows, which includes Git Bash)
set -e

GREEN="\033[0;32m"; RED="\033[0;31m"; YELLOW="\033[1;33m"; NC="\033[0m"
say()  { printf "${GREEN}==> %s${NC}\n" "$1"; }
warn() { printf "${YELLOW}!!  %s${NC}\n" "$1"; }
fail() { printf "${RED}xx  %s${NC}\n" "$1"; exit 1; }

# Always run from the folder this script lives in
cd "$(dirname "$0")"

say "Step 1/4: checking Node.js and npm"
if ! command -v node >/dev/null 2>&1 || ! command -v npm >/dev/null 2>&1; then
  warn "Node.js was not found."
  case "$(uname -s)" in
    Darwin*)
      if command -v brew >/dev/null 2>&1; then
        say "Installing Node.js with Homebrew"
        brew install node
      else
        fail "Install Node.js (LTS) from https://nodejs.org, close and reopen Terminal, then run this script again."
      fi
      ;;
    *)
      if command -v winget >/dev/null 2>&1; then
        say "Installing Node.js LTS with winget"
        winget install -e --id OpenJS.NodeJS.LTS --accept-package-agreements --accept-source-agreements
        fail "Node.js installed. Close PowerShell, open a NEW PowerShell window, and run this script again."
      else
        fail "Install Node.js (LTS) from https://nodejs.org, close and reopen PowerShell, then run this script again."
      fi
      ;;
  esac
fi
echo "node $(node -v), npm $(npm -v)"

NODE_MAJOR=$(node -v | sed 's/v\([0-9]*\).*/\1/')
[ "$NODE_MAJOR" -ge 18 ] || fail "Node.js 18 or newer is needed. Please update from https://nodejs.org"

say "Step 2/4: installing React and tools for the worksheet"
(cd worksheet && npm install)

say "Step 3/4: installing the backup demo (in case your app does not run)"
(cd .backup-demo && npm install)

say "Step 4/4: creating your .env file"
if [ ! -f worksheet/.env ]; then
  cp worksheet/.env.example worksheet/.env
  say "Created worksheet/.env  -  open it and paste your API key after the = sign"
else
  warn "worksheet/.env already exists, leaving it as it is"
fi

echo
say "All done! Next:"
echo "  1. cd worksheet"
echo "  2. Fill in the blanks (search for ____ in src/)"
echo "  3. npm run dev   then open http://localhost:5173"
