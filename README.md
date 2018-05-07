# Clockwise.MD  ![CircleCI](https://circleci.com/gh/DocuTAP/www.clockwisemd.com.svg?style=svg)

Web site for Clockwise.MD

## To run locally

- Update gems: `bundle`
- Run a full build: `jekyll build`
- Serve files locally: `jekyll serve`

## To update the site

Just commit changes and push your changes, the site is rebuilt automatically.

## To deploy manually

`JEKYLL_ENV=production jekyll build && s3_website push`

## To deploy

Just commit and push, CI will automatically deploy

## To make your own

Use [Jekyll](http://jekyllrb.com)

## License

The MIT License (MIT) for Jekyll.

Logos, Content and Clockwise.MD are Copyright Lightshed Healthcare Technologies.
