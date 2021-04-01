---
title: "Learning Hugo"
date: 2021-03-31T00:48:05+03:00
draft: false
description: "I tried learning Hugo and took notes."
---

## Essential Commands
{{< highlight go >}}
// To start a project
hugo new site first_site
// To run server -D to show drafts
hugo server -D
// To create a post dirname optional
hugo new dirname/post_name.md
{{< / highlight >}}

Add a theme to config.toml

{{< highlight go >}}
    theme = "theme-name"
{{< / highlight >}}

## Content Organization
{{< highlight go >}}
// Create this to make /dir1/dir2
// accessible
hugo new dir1/dir2/_index.md
{{< / highlight >}}

## Archetypes
You can change the archetypes to change the front matter defaults. Like dir1.md. If directroy exists, it will be used.

## Shortcodes
You can add shortcodes to content.
{{< highlight go >}}
\{\{\< shortcode-name param \>\}\}
// Example
\{ \{<youtube 2xkNJL4gJ9E>\}\}
{{< / highlight >}}

## Taxonomies
Adding keywords, tags, categories
Add taxonomies to the front matter.

{{< highlight go >}}
tags: ["tag1", "tag2", "tag3"]
categories: ["cat1", "cat2"]
{{< / highlight >}}

### Custom Taxonomy
{{< highlight go >}}
// Add to config.toml
// If you define taxonomies, you
// Should define tag and cat too
[taxonomies]
	tag = "tag"
	category = "categories"
	mood = "moods"
{{< / highlight >}}

## Templates (Layouts)
Two main types of content. List and Single Page.
You can override theme layouts. Create folder _default in layouts.
You can add index.html for homepage.
You can create folder dir1 to be used in the section.
You can create baseof.html in _default to make a parent template.
{{< highlight go >}}
//baseof.html
...
<body>
	{{block "main" . }}
		Can write default here.
	{{end}}
</body>
...
// Use in single.html etc.
{{define "main"}}
	This is the bla bla
{{end}}
{{< / highlight >}}

### Partial Headers
{{< highlight go >}}
{{ partial "header" . }}
// Can also pass a dictionary
{{ partial "header" (dict "abc" "alphabet") }}
{{< / highlight >}}

## Variables
{{< highlight go >}}
{{ .Title }}
{{ .Date}}
{{ .URL}}
// You can also create custom
// Variables in YAML
myVar: "blabla
{{ .Params.myVar }}
// Can create new variables as such
{{ $varName := "string" }}
{{ $varName }}
{{< / highlight >}}

## Functions
{{< highlight go >}}
{{ truncate 10 " This is a very
 long string" }}
{{ add 1 5 }}
... sub
... singularize

{{ range .Pages }}
	// Loop
	{{ .Title }}
{{ end }}
{{< / highlight >}}

## If
{{< highlight go >}}
{{ if }}
eq
lt
le
gt
ge
not
and
or

{{ if not (eq $var1 $var2) }}
{{ else }}
{{ end}}
{{< / highlight >}}
