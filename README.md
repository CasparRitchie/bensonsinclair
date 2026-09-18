# Benson Sinclair

Static website for [bensonsinclair.com](https://bensonsinclair.com).

## Local preview

No build step is required. From this directory, run:

```sh
python3 -m http.server 8080 --directory public
```

Then open `http://localhost:8080`.

## Cloudflare Pages

Connect the GitHub repository to Cloudflare Pages and use:

- Framework preset: `None`
- Build command: leave blank
- Build output directory: `public`

Add `bensonsinclair.com` and `www.bensonsinclair.com` as custom domains. Cloudflare will show the nameservers or DNS records to enter at GoDaddy.

## Before launch

- Confirm `hello@bensonsinclair.com` is receiving mail.
- Review the legal notice and business address.
- Check the live domain after Cloudflare provisions its TLS certificate.
