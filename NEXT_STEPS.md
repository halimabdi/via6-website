# Next Steps for Via6 AI Labs Platform

**Last Updated**: 2026-01-24
**Current Status**: Website Live & Fixes Applied (v1.0.1)

## 🚀 Immediate Priorities (This Week)

### 1. Finalize Integrations
- [ ] **Calendar**: Configure Cal.com or Google Workspace Calendar for the booking links (currently pointing to placeholders).
- [ ] **Contact Form**: Test the contact form webhook endpoints to ensure leads are captured correctly.
- [ ] **Analytics**: Set up Umami or Google Analytics 4 to track visitor traffic.

### 2. Infrastructure & Deployment
- [ ] **GitHub Repository**: Initialize a Git repository and push the current code to a remote (GitHub/GitLab) for version control.
- [ ] **Production Deployment**: Deploy the finalized container to the production environment (Coolify).
- [ ] **Domain**: Point the actual domain (`via6ai.com`) to the Coolify instance.

### 3. Automation Stack (Phase 2)
- [ ] **CRM**: Deploy and configure Twenty CRM.
- [ ] **Live Chat**: Integrate Chatwoot for customer support.
- [ ] **Monitoring**: Set up Uptime Kuma for 24/7 monitoring.

## ✅ Completed (Recent)
- [x] **Website UI/UX Review**: Conducted deep static analysis of the codebase.
- [x] **Accessibility Fixes**: Added `aria-label`s to Navigation (mobile menu), Footer (social links), and Hero (scroll indicator).
- [x] **Mobile Improvements**: Implemented body scroll locking for the mobile menu.
- [x] **Walkthrough**: Documented the implementation of fixes in `WALKTHROUGH_IMPLEMENTATION.md`.

## 📝 Documentation
Refers to the following files for detailed guides:
- `CLAUDE.md`: Comprehensive development guide and stack overview.
- `WALKTHROUGH_IMPLEMENTATION.md`: Recent fixes and improvements.
- `DEPLOYMENT_CHECKLIST.md`: Steps to verify before going fully live.

### 4. Immediate Action Required
- [ ] **Activate Contact Workflow**: Log in to n8n at `https://n8n.lmiatracker.com` and toggle the **Via6 Website Contact Form** workflow to **Active**. (Imported but inactive).
## PENDING TASKS - Sat Jan 24 08:05:45 PM UTC 2026

### SMTP Setup Required
- [ ] Configure SMTP credentials in n8n for contact form email notifications
- [ ] Options: Gmail SMTP, SendGrid, or domain email (hello@via6ai.com)
- [ ] Link credential to 'Send Email Notification' node in 'Via6 Website Contact Form' workflow

