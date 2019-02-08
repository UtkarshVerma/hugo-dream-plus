# Dream Plus Theme for Hugo
[![Build Status](https://travis-ci.org/UtkarshVerma/hugo-dream-plus.svg?branch=master)](https://travis-ci.org/UtkarshVerma/hugo-dream-plus)
[![Posts View Demo](https://api.netlify.com/api/v1/badges/6ef6f16b-9f2b-4d4a-9c35-8ef5a28783df/deploy-status)](https://app.netlify.com/sites/dream-plus-posts/deploys)
[![Cards View Demo](https://api.netlify.com/api/v1/badges/8588f660-afc1-4446-8db4-9dc5d87c4c79/deploy-status)](https://app.netlify.com/sites/dream-plus-cards/deploys)

![Dream Plus Theme](https://github.com/UtkarshVerma/hugo-dream-plus/blob/master/images/screenshot.png)
This theme is an upgraded version of the [Dream Theme](https://github.com/g1eny0ung/hugo-theme-dream) by [Yue Yang](https://github.com/g1eny0ung) and contains tons of new features such as:

* "Cards" and "Posts" views for the home page
* twemoji rendering
* Table of contents for posts
* Hugo image processing for faster loading
* Random image background
* Multiple author support
* Disqus
* Sidebar
* Share card below posts
* Licenses for posts
* Device detection, that is whether the client device is a PC or phone
* About section can be written in MarkDown
* Custom 404 pages can be written in MarkDown
* Custom Favicon
* RSS Button
* Custom CSS and JS can be used without modifying the theme
* More social icons
* Shorte.st website script, and a lot of other minor improvements

This theme can be used for two purposes:

1. If you're making a site which links to other sites and your stuff all around the internet, then you can switch to "Cards view" for that. I use this view for my home page here: [UtkarshVerma's Site](https://utkarshverma.github.io)
2. If you're simply making a blog or another website with a bunch of posts, then switch to the "Posts view" for that. I use this view for my blog: [UtkarshVerma's Blog](https://utkarshverma.github.io/blog)

This project adheres to the Contributor Covenant [code of conduct](/CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to [utkarshverma@pm.me](mailto:utkarshverma@pm.me).


### Live Demo
* [**Cards View**](https://dream-plus-cards.netlify.com)
* [**Posts View**](https://dream-plus-posts.netlify.com)

---

## Table of Contents
* [**Installation**](#installation)

* [**Getting Started**](#getting-started)

* [**Documentation**](#documentation)

* [**Nearly Finished**](#nearly-finished)

* [**Contributing**](#contributing)

* [**License**](#license)

---

## Installation
The theme can be installed by running the following commands inside your **Hugo website** folder.
```shell
cd themes
git submodule add https://github.com/UtkarshVerma/hugo-dream-plus dream-plus
git submodule update --init --recursive
```

## Getting Started
Once the theme has been successfully installed, you'll have to do a bit of tuning of the theme to meet your taste.

### Configure Dream Plus
Within the [`exampleSite`](/exampleSite) folder, you'll find the config files, [`cards.toml`](/exampleSite/cards.toml) and [`posts.toml`](/exampleSite/posts.toml) which can be used to tweak the theme.

You must use these config files as a basis for your site, since they **take care of the necessary variable declarations**, which you may edit according to your needs.

### Describe yourself
Define yourself through the following config variables in `params` under the `author` table as shown:
```toml
[params.author]
	author = "<name of the author>"
	description = "Short description of the site"
	motto = "author's motto or short description"

	#Leaving the avatar variable unset displays svg avatars
	avatar = "<absolute path to avatar>"
```

After that, fill up the social variables at the end of the config file. This theme suports the following social sites: (The examples are given)

| Social Link | Variable | Example Initialization |
|:---:|:---:|:---:|
| GitHub | *github* | `github = "username"` |
| Email | *email* | `email = "username@example.com"` |
| Twitter | *twitter* | `twitter = "username"` |
| Facebook | *facebook* | `facebook = "username"` |
| YouTube | *youtube* | `youtube = "username"` |
| Medium | *medium* | `medium = "username"` |
| LinkedIn | *linkedin* | `linkedin = "username"` |
| StackOverflow | *stackoverflow* | `stackoverflow = "number/username"` |
| CodePen | *codepen* | `codepen = "username"` |
| Reddit | *reddit* | `reddit = "username"` |

These variables have to be in the `[social]` table of `config.toml` or its equivalent for `YAML` or `JSON`.
```toml
[social]
	github = "UtkarshVerma"
```

Once this is done, write up the "**About Me**" section of your website in Markdown as directed here:[Error and About Pages](https://github.com/UtkarshVerma/hugo-dream-plus#error-and-about-pages).

### Toggling the views
As stated earlier, this theme has two views, **Cards view** and **Posts view**. The type of view rendering depends on the type of content you feed to **Dream Plus**.  
Therefore:
* Having `cards` folder in `/content` folder activates *Card view*.
* Having `posts` folder in `/content` folder activates *Post view*.

> The `contentType` variable has now been deprecated.

One clear distinction between both the view is that **Card** view doesn't support posts, instead it redirects to the specified link, while **Post** view does.
You may test them out yourselves by visiting my sites(stated above) which use them.
Also, post/card creation is done differently for both the views. It is as follows:
```shell
hugo new cards/example.md		#Card creation
hugo new posts/example.md		#Post creation
```

After this, just open your MarkDown card/post and provide the parameters for the card/post.

### Image background
To enable setting images as background, you'll have to disable **random colour background** first by setting `colorBG` in `background` table to `false`.
Also, enabling image background feature requires the modification of `bgList` array. If you prefer a single image background, then simply give a single value to the array. For example:
```
bgList = ["/images/bg1.jpeg"]
```

Providing multiple images to the `bgList` array enables the random background feature of Dream Plus, which cycles the background within the given array every time the site is reloaded.
You may also blur the background to a certain extent through the `bgBlur` variable.

> All the background-configuring variables are to be placed inside the `backround` table under `params`

```toml
[params.background]
	#Random backgrounds
	bgList = ["/images/bg1.jpeg", "/images/bg2.jpeg", "/images/bg3.jpeg"]
	#Blur the background
	bgBlur = "0.2"
```

### Card covers
The covers for each post-card or card are processed by Dream Plus using [Hugo Image Processing](https://gohugo.io/content-management/image-processing) for faster website loading times. The lookup paths for the cover file are as stated below:
- Cards: In the bundle. For example, `/content/cards/<card>/cover.<any-extension>`
- Posts: In the images folder inside the bundle. For example, `/content/posts/<post>/images/cover.<any-extension>`

> ~~**Specifying the cover image through the frontmatter has now been deprecated**~~.  
Card covers can now be defined through the frontmatter through `cover` key. However image processing won't be applicable on such covers. Also, **frontmatter covers are prioritized over image resources**, therefore, to make the image resource covers render, you'll have to remove the cover key from the frontmatter first.

You may also modify the image processing process through `coverArgs` variable in `[params.features]`. The arguments passed must be for the `.Resize` function since that's what Dream Plus utilizes. For example,
```toml
[params.features]
	coverArgs = "400x300 q50"		#Specify resolution and quality of output image
```

### Device detection
You may configure your website based on the client device by using the `isMobile` JS variable. It is `true` when the client device is a mobile and vice versa.

### Error and About pages
This theme supports total customization of **about** and **error** pages. These pages may be customized through the [`about.md`](/exampleSite/content/about.md) and [`404.md`](/exampleSite/content/404.md) files. *Dream Plus reads the above stated files as plain Markdown text* and then renders them. Once you've finished writing the files and modifying them according to your needs, paste them in the `content` folder of your Hugo site.  
If you don't want these pages to be built by Hugo and served with their own links such as `<website>.<domain>/about` or `<website>.<domain>/404`. Then you can tell Hugo to ignore these through [`ignoreFiles`](https://gohugo.io/getting-started/configuration/#ignore-files-when-rendering) variable in your `config.toml` file as follows:  
```toml
ignoreFiles = ["content/404.md", "content/about.md"]
```

### Custom favicon
You may also set a custom favicon for your website through the `favicon` config variable under `params`. For example,
```
[params]
	favicon = "/images/defaultFav.ico"
```

### Shorte.st website script
The [Shorte.st](https://shorte.st) website script has been implemented in this theme. To use it, you'll have to configure it through the `shortest` table under `params`.
```toml
[params.shortest]
	enabled = true		#Enable shorte.st
	apiToken = ""		#The API Token you received from shorte.st
	domains = [""]		#The domains you want to define
```

### Some other configurations
If you'd like to control the amount of posts/cards a page has, then you may do so using the `paginate` config variable.
```toml
paginate = 4		#Defaults to 10
```

Also, the tags, when enabled, won't all be displayed on the header and sidebar by default. Only the top 8 tags(article-count-wise) are displayed there to avoid congestion. However it can be overriden using `tagLimit` variable of `[params.tag]` table.
```toml
[params.tag]
	enabled = true
	tagLimit = 10		#Top 10 tags will be displayed
	#or 
	tagLimit = 0		#Display all tags
```

There are some other minor configurations as well. You may set them up by referring to the comments inside the config file.

## Documentation
The documentation for this repository is currently under work and is added to this repository's [wiki](https://github.com/UtkarshVerma/hugo-dream-plus/wiki).
Wiki contributions are most welcome. Feel free to ask me about this theme's features for that.

## Nearly Finished
After finishing the configurations, you're good to go. So, test your website using:
```bash
hugo server
```
Your site should now be locally available at [http://localhost:1313](http://localhost:1313) for testing purposes.

For testing the example site, you'll have to explicitly specify the config file to Hugo. This is done as follows:
```bash
#For posts view demo
hugo server --config posts.toml

#For cards view demo
hugo server --config cards.toml
```

## Contributing
Found something interesting to add to this theme or rather a :beetle:bug? Let me know about it through the [issue tracker](https://github.com/UtkarshVerma/hugo-dream-plus/issues). [Pull requests](https://github.com/UtkarshVerma/hugo-dream-plus/pulls) are also welcome.
For more detailed instructions on how to contribute, refer to [**CONTRIBUTING.md**](/CONTRIBUTING.md)

## License
This theme is released under the [**MIT**](/LICENSE) license.
