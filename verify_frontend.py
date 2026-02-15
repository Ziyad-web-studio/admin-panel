from playwright.sync_api import sync_playwright
import time

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()

        # Homepage
        page.goto("http://localhost:3000")
        page.wait_for_selector('h1')
        # Wait for animations
        time.sleep(2)
        page.screenshot(path="verification_home.png", full_page=True)

        # Projects
        page.goto("http://localhost:3000/projects")
        page.wait_for_selector('h1')
        time.sleep(1)
        page.screenshot(path="verification_projects.png", full_page=True)

        # About
        page.goto("http://localhost:3000/about")
        page.wait_for_selector('h1')
        time.sleep(1)
        page.screenshot(path="verification_about.png", full_page=True)

        browser.close()

if __name__ == "__main__":
    run()
