# Dream Plus Theme for Hugo

![Dream Plus Theme](https://github.com/UtkarshVerma/hugo-dream-plus/blob/master/images/original.png)
This theme is an upgraded version of the [Dream Theme](https://github.com/g1eny0ung/hugo-theme-dream) by [Yue Yang](https://github.com/g1eny0ung) and contains tons of new features such as:

* **Card** and **Post** views for the home page
* twemoji rendering
* Table of contents for posts
* Random image background
* Sidebar
* Share card below posts
* About section can be written in MarkDown
* Custom 404 pages can be written in MarkDown
* Custom Favicon
* Custom CSS and JS can be used without modifying the theme
* More social icons
* Shorte.st website script, and a lot of other minor improvements.

This theme can be used for two purposes:

1. If you're making a site which links to other sites and your stuff all around the internet, then you can switch to **Card** view for that. I use this view for my home page here: [UtkarshVerma's Site](https://utkarshverma.me)
2. If you're simply making a blog or another website with a bunch of posts, then switch to the **Post** view for that. I use this view for my blog: [UtkarshVerma's Blog](https://blog.utkarshverma.me)

## Installation
The theme can be installed by running the following commands inside your **Hugo website** folder.
```shell
cd themes
git submodule add https://github.com/UtkarshVerma/hugo-dream-plus dream-plus
git submodule update --init --recursive
```

## Getting Started
Once the theme has been successfully installed, you'll have to do a bit of tuning to the theme to meet your taste.

### The config file
Within the [`exampleSite`](/exampleSite) folder, you'll find the [`config.toml`](/exampleSite/config.toml) file which can be used to tweak the theme.

### Describe yourself
Define yourself through the following variables:
```
author = "<name of the author>"
description = "Short description of the site"
motto = "author's motto or short description"
avatar = "<absolute path to avatar>"	//Leaving the avatar variable unset displays svg avatars
```
After that, fill up the social variables at the end of the config file. This theme suports the following social sites: (The examples are given)

* GitHub    - `github = "<username>"`
* Email     - `email = "<email id>"`
* Twitter   - `twitter = "<username>"`
* Facebook  - `facebook = "<username>"`
* YouTube   - `youtube = "<username>"`
* Medium    - `medium = "<username>"`
* LinkedIn  - `linkedin = "<username>"`
* StackOverflow - `stackoverflow = "<username with the user number>"`
* CodePen   - `codepen = "<username>"`
* Reddit    - `reddit = "<username>"`

### Toggling the views
As stated earlier, this theme has two views, **Card view** and **Post view**. To define your desired view, modify the `contentType` variable as follows:
* `contentType = "cards"    # Enables the card view.`   
* `contentType = "post"     # Enables the post view.`

One clear distinction between both the view is that **Card** view doesn't support posts, instead it redirects to the specified link, while **Post** view does.
You may test them out yourselves by visiting my sites(stated above) which use them.

### Twitter emoji
This theme supports [twemoji](https://github.com/twitter/twemoji) rendering by default. To enable/disable it, you may set the `twitterEmoji` config variable to true or false respectively.
Regarding the usage, simply use the good 'ol MarkDown syntax for emoji and they'll be rendered as twemoji.

### Table of contents (Post view only)
This theme is capable of indexing out the headings into a clean table of contents for bettering browsing through long posts. It can be enabled/disabled by modifying the `enableToc` config variable accordingly.

### Image background
To enable setting images as background, you'll have to disable **random colour background** first by setting `enableColorBG` to false.
Also, enabling image background feature requires the modification of two variables, namely `bgImage` and `bgList`. If you prefer a single image background, then simply set the value of `bgImage` as the absolute path of your image. For example,
```
bgImage = "/images/bg1.jpeg"
```
You can also enable random background feature which switches the background between a provided images list(stored in `bgList`), every time the site is reloaded. For example,
```
bgList = ["/images/bg1.jpeg", "/images/bg2.jpeg", "/images/bg3.jpeg"]
```
You may also add blurring effect to the background image using `bgBlur`.

###  Share card (Post view only)
This card appears below your posts to allow sharing of your post on **Facebook** and **Twitter**. Enable/disable it through the `enableShareCard` variable by setting appropriate boolean values.

### Error page and about page headings
The headings for error page and about page are set through the config file via the `aboutHeader` and `error404` variable. Enter the value in string form. For example,
```
  error404 = "Error 404: Page Not Found"
  aboutHeader = "So, Who Am I?"
```

### Custom favicon
You may also set a custom favicon for your website using the `favicon` config variable. For example,
```
  favicon = "/images/defaultFav.ico"
```

### Importing CSS and JS
You can also manipulate the theme externally using CSS files and JS files and linking them using the `customCSS` and `customJS` config list variables. The path should be relative for this. For example,
```
  customCSS = ["css/blog.css"]
  customJS = ["js/twemoji.js"]
```

### Shorte.st website script
The [shorte.st](https://shorte.st) website script has been implemented in this theme. To use it, you'll first have to enable this feature by setting `enableShortest` to `true` and then setting the **API Token** you got from Shorte.st to `shortestToken`, and after that, define your domains as a list in the `shortestDomains` config variable.

### Some other configurations
There are some other minor configurations as well. You may set them up by referring to the comments inside the config file.

## Nearly Finished
After finishing the configurations, you're good to go. So, test your website using:
```
hugo server
```
Your site should now be locally available at [http://localhost:1313](http://localhost:1313) for testing purposes.

## Contributing
Found something interesting to add to this theme of rather a bug? Let me know about it through the [issue tracker](https://github.com/UtkarshVerma/hugo-dream-plus/issues). [Pull requests](https://github.com/UtkarshVerma/hugo-dream-plus/pulls) are also welcome.

## License 
This theme is released under the [**MIT**](/LICENSE.MD) license.


