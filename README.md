# Source Code For [alahmadiq8.github.com](https://alahmadiq8.github.io)

## Hugo References

#### [All configuration settings](https://gohugo.io/getting-started/configuration/#all-configuration-settings)

#### [Hugo's lookup Order](https://gohugo.io/templates/lookup-order/)

#### [Check if isHome](https://gohugo.io/variables/page/#page-variables)

`.IsHome` page  variable. See list of [Page Variables](https://gohugo.io/variables/page/#page-variables).

```
{{ if .IsHome }}
	this is the home page
{{ end }}

{{ if ne .IsHome true }}
	this is the home page
{{ end }}
```

#### [Passing values to partials](https://gohugo.io/functions/dict/#example-using-dict-to-pass-multiple-values-to-a-partial)


#### [Front Matter Predefined Variables](https://gohugo.io/content-management/front-matter/#predefined)
