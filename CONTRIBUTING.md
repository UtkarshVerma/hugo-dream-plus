# Contributing to Dream Plus

:+1::tada: First off, thanks for taking the time to contribute! :tada::+1:

The following is a set of guidelines for contributing to Dream Plus theme, which is hosted by [UtkarshVerma](https://www.github.com/UtkarshVerma/hugo-dream-plus) on GitHub.
These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.

---

### Table of Contents
* [Code of Conduct](#code-of-conduct)
* [I don't want to read this whole thing, I just have a question!!!](#i-dont-want-to-read-this-whole-thing-i-just-have-a-question)
* [What should I know before I get started?](#what-should-i-know-before-i-get-started)
* [How can I contribute?](#how-can-I-contribute)
  - [Reporting Bugs](#reporting-bugs)
  - [Suggesting Enhancements](#suggesting-enhancements)
  - [Your First Code Contribution](#your-first-code-contribution)
  - [Pull Requests](#pull-requests)
  - [Wiki](#wiki)
* [Styleguides](#Styleguides)
  - [Git Commit Messages](#git-commit-messages)
  - [(Hu)go Templating Styleguide](#hugo-styleguide)
  - [Documentation Styleguide](#documentation-styleguide)

* [Additional Notes](#additional-notes)
  - [Issue and Pull Request Labels](#issue-and-pull-request-labels)

---

## Code of Conduct

This project and everyone participating in it is governed by the [Dream Plus Code of Conduct](/CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to [utkarshverma@pm.me](mailto:utkarshverma@pm.me).

## I don't want to read this whole thing I just have a question!!!

If you have a question, then you may ask it through the [issue tracker](https://github.com/UtkarshVerma/hugo-dream-plus/issues).

## What should I know before I get started?

**Dream Plus** is based on [Hugo](https://gohugo.io), and consists of multiple programming languages. Therefore to be able to work on it, you need to have a decent amount of knowledge about the following:

* [(Hu)go Templating](https://gohugo.io/templates/introduction/)
* [Hugo](https://gohugo.io/documentation/)
* HTML, CSS and JS

> I personally prefer to avoid JS whenever there's an alternative present, due to performance reasons. Therefore JS isn't as crucial to this project as the former ones.

## How can I contribute?
### Reporting Bugs

This section guides you through submitting a bug report for Dream Plus. Following these guidelines helps maintainers and the community understand your report :pencil:, reproduce the behavior :computer: :computer:, and find related reports :mag_right:.

Before creating bug reports, please check [this list](#before-submitting-a-bug-report) as you might find out that you don't need to create one. When you are creating a bug report, please [include as many details as possible](#how-do-i-submit-a-good-bug-report). Fill out [the required template](/.github/ISSUE_TEMPLATE), the information it asks for helps us resolve issues faster.

> **Note:** If you find a **Closed** issue that seems like it is the same thing that you're experiencing, open a new issue and include a link to the original issue in the body of your new one.

#### Before Submitting A Bug Report
* Ensure that the bug isn't caused due to misconfiguring your Hugo site.
* Check if the problem has already been reported. If it has **and the issue is still open**, add a comment to the existing issue instead of opening a new one.

#### How Do I Submit A (Good) Bug Report?

Bugs are tracked as [GitHub issues](https://guides.github.com/features/issues/). Create an issue and provide the following information by filling in [the template](/.github/ISSUE_TEMPLATE).

Explain the problem and include additional details to help maintainers reproduce the problem:

* **Use a clear and descriptive title** for the issue to identify the problem.
* **Describe the exact steps which reproduce the problem** in as many details as possible. **Don't just say what you did, but explain how you did it**.
* **Provide specific examples to demonstrate the steps**. Include links to files or GitHub projects, or copy/pasteable snippets, which you use in those examples. If you're providing snippets in the issue, use [Markdown code blocks](https://help.github.com/articles/markdown-basics/#multiple-lines).
* **Describe the behavior you observed after following the steps** and point out what exactly is the problem with that behavior.
* **Explain which behavior you expected to see instead and why.**
* **Include screenshots and animated GIFs** which show you following the described steps and clearly demonstrate the problem.
* **If the problem wasn't triggered by a specific action**, describe what you were doing before the problem happened and share more information using the guidelines below.

Provide more context by answering these questions:

* **Can you reproduce the problem in [`exampleSite`](/exampleSite)?**
* **Did the problem start happening recently** (e.g. after pulling Dream Plus' latest commits) or was this always a problem?
* If the problem started happening recently, **can you reproduce the problem in an older release of Dream Plus, and/or Hugo?** What's the most recent version in which the problem doesn't happen? You can download older versions of Dream Plus from [the releases page](https://github.com/UtkarshVerma/hugo-dream-plus/releases).
* **Can you reliably reproduce the issue?** If not, provide details about how often the problem happens and under which conditions it normally happens.

### Suggesting Enhancements

This section guides you through submitting an enhancement suggestion for Dream Plus, including completely new features and minor improvements to existing functionality. Following these guidelines helps maintainers and the community understand your suggestion :pencil: and find related suggestions :mag_right:.

Before creating enhancement suggestions, please check [this list](#before-submitting-an-enhancement-suggestion) as you might find out that you don't need to create one. When you are creating an enhancement suggestion, please [include as many details as possible](#how-do-i-submit-a-good-enhancement-suggestion). Fill in [the template](.github/ISSUE_TEMPLATE), including the steps that you imagine you would take if the feature you're requesting existed.

#### Before Submitting An Enhancement Suggestion

* You might discover that the enhancement is already available. Most importantly, check if your clone is even with Dream Plus's master branch.
* Check if the enhancement has already been suggested. If it has, add a comment to the existing issue instead of opening a new one.

#### How Do I Submit A (Good) Enhancement Suggestion?

Enhancement suggestions are tracked as [GitHub issues](https://guides.github.com/features/issues/). Create an issue on Dream Plus, and provide the following information:

* **Use a clear and descriptive title** for the issue to identify the suggestion.
* **Provide a step-by-step description of the suggested enhancement** in as many details as possible.
* **Provide specific examples to demonstrate the steps**. Include copy/pasteable snippets which you use in those examples, as [Markdown code blocks](https://help.github.com/articles/markdown-basics/#multiple-lines).
* **Describe the current behavior** and **explain which behavior you expected to see instead** and why.
* **Include screenshots and animated GIFs** which help you demonstrate the steps or point out the part of Dream Plus which the suggestion is related to. You can use [this tool](https://www.cockos.com/licecap/) to record GIFs on macOS and Windows, and [this tool](https://github.com/colinkeenan/silentcast) or [this tool](https://github.com/GNOME/byzanz) on Linux.
* **Explain why this enhancement would be useful** to most users.
* **Specify which version of Dream Plus and Hugo you're using.** You can get the exact version by running `hugo version` in your terminal.

### Your First Code Contribution

Unsure where to begin contributing to Dream Plus? You can start by looking through these `beginner` and `help-wanted` issues:

* [Beginner issues][beginner] - issues which should only require a few lines of code, and a test or two.
* [Help wanted issues][help-wanted] - issues which should be a bit more involved than `beginner` issues.

Both issue lists are sorted by total number of comments. While not perfect, number of comments is a reasonable proxy for impact a given change will have.

### Local development

For working on Dream Plus, you can simply clone [this repository](https://github.com/UtkarshVerma/hugo-dream-plus), and make changes to its source code. To ensure if your changes work, test them against the [`example site`](/exampleSite).

### Pull Requests

* Fill in [the required template](PULL_REQUEST_TEMPLATE.md)
* Do not include issue numbers in the PR title.
* Include screenshots and animated GIFs in your pull request whenever possible.
* Follow the styleguides(#styleguides).
* Document new code based on the [Documentation Styleguide](#documentation-styleguide).
* End all files with a newline.

### Wiki

Currently, the [wiki](https://github.com/UtkarshVerma/hugo-dream-plus/wiki) is a work in progress. The wiki is supposed to hold the documentation for the theme instead of the readme, which, I think should only introduce the features in short.
Therefore, any help in descriptively(using GIFs and images) documenting the features in the wiki is appreciated.

## Styleguides

### Git Commit Messages

* Use the present tense ("Add feature" not "Added feature")
* Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
* Limit the first line to 72 characters or less
* Reference issues and pull requests liberally after the first line
* Consider starting the commit message with an applicable emoji:
    * :art: `:art:` when improving the format/structure of the code
    * :racehorse: `:racehorse:` when improving performance
    * :memo: `:memo:` when writing docs
    * :bug: `:bug:` when fixing a bug
    * :fire: `:fire:` when removing code or files

### Hugo Templating Styleguide

* Indentation is important. Use 1 tab or 2 spaces for indentation. It should be done according to the HTML code which contains it.
  For example,
  ```go
  <div class="random">
  {{ if .IsSite }}
    <div class="subclass">
    {{ if .Params.subclass }}
      {{ with .Params.name }}
        <p>{{ .Params.name }}</p>
      {{ end }}
    {{ end }}
    </div>
  {{ end }}
  </div>
  ```

### Documentation Styleguide

* Any feature is to be wholly documented in the [Wiki](https://github.com/UtkarshVerma/hugo-dream-plus/wiki).
* The `README.MD` must describe the feature in short and link to the wiki for its implementation.
* The documentation must be grammatically correct. For checking the grammar of your text, you may use [Grammarly](https://app.grammarly.com/) or other tools.
* Utilizing Markdown is suggested. For example, using code blocks, emojis, quotes etc. They break the monotonicity of the documentation and make it look more lively.

## Additional Notes

### Issue and Pull Request Labels

This section lists the labels we use to help us track and manage issues and pull requests.

[GitHub search](https://help.github.com/articles/searching-issues/) makes it easy to use labels for finding groups of issues or pull requests you're interested in. To help you find issues and pull requests, each label is listed with search links for finding open items with that label. We  encourage you to read about [other search filters](https://help.github.com/articles/searching-issues/) which will help you write more focused queries.

The labels are loosely grouped by their purpose, but it's not required that every issue have a label from every group or that an issue can't have more than one label from the same group.

Please open an issue if you have suggestions for new labels, and if you notice some labels are missing on some repositories, then please open an issue.

#### Type of Issue and Issue State

| Label name | Description |
| --- | --- |
| [`enhancement`][label-enhancement] | Feature requests. |
| [`bug`][label-bug] | Confirmed bugs or reports that are very likely to be bugs. |
| [`question`][label-question] | Questions more than bug reports or feature requests (e.g. how do I do X). |
| [`feedback`][label-feedback] | General feedback more than bug reports or feature requests. |
| [`help-wanted`][label-help-wanted] | Help from the community in resolving these issues is appreciated. |
| [`beginner`][label-beginner] | Less complex issues which would be good first issues to work on for users who want to contribute to Dream Plus. |
| [`more-information-needed`][label-more-information-needed] | More information needs to be collected about these problems or feature requests (e.g. steps to reproduce). |
| [`needs-reproduction`][label-needs-reproduction] | Likely bugs, but haven't been reliably reproduced. |
| [`duplicate`][label-duplicate] | Issues which are duplicates of other issues, i.e. they have been reported before. |
| [`wontfix`][label-wontfix] | Issues which won't be worked on for now. |
| [`invalid`][label-invalid] | Issues which aren't valid (e.g. user errors). |

#### Pull Request Labels

| Label name | Description
| --- | --- |
| [`work-in-progress`][label-work-in-progress] | Pull requests which are still being worked on, more changes will follow. |
| [`needs-review`][label-needs-review] | Pull requests which need code review. |
| [`under-review`][label-under-review] | Pull requests being reviewed. |
| [`requires-changes`][label-requires-changes] | Pull requests which need to be updated based on review comments and then reviewed again. |
| [`needs-testing`][label-needs-testing] | Pull requests which need manual testing. |

[label-enhancement]: https://github.com/UtkarshVerma/hugo-dream-plus/issues?q=is%3Aissue+is%3Aopen+label%3Aenhancement
[label-bug]: https://github.com/UtkarshVerma/hugo-dream-plus/issues?q=is%3Aopen+is%3Aissue+label%3Abug
[label-question]: https://github.com/UtkarshVerma/hugo-dream-plus/issues?q=is%3Aopen+is%3Aissue+label%3Aquestion
[label-feedback]: https://github.com/UtkarshVerma/hugo-dream-plus/issues?q=is%3Aopen+is%3Aissue+label%3Afeedback
[label-help-wanted]: https://github.com/UtkarshVerma/hugo-dream-plus/issues?q=is%3Aopen+is%3Aissue+label%3Ahelp-wanted
[label-beginner]: https://github.com/UtkarshVerma/hugo-dream-plus/issues?q=is%3Aopen+is%3Aissue+label%3Abeginner
[label-more-information-needed]: https://github.com/UtkarshVerma/hugo-dream-plus/issues?q=is%3Aopen+is%3Aissue+label%3Amore-information-needed
[label-needs-reproduction]: https://github.com/UtkarshVerma/hugo-dream-plus/issues?q=is%3Aopen+is%3Aissue+label%3Aneeds-reproduction
[label-documentation]: https://github.com/UtkarshVerma/hugo-dream-plus/issues?q=is%3Aopen+is%3Aissue+label%3Adocumentation
[label-blocked]: https://github.com/UtkarshVerma/hugo-dream-plus/issues?q=is%3Aopen+is%3Aissue+label%3Ablocked
[label-duplicate]: https://github.com/UtkarshVerma/hugo-dream-plus/issues?q=is%3Aopen+is%3Aissue+label%3Aduplicate
[label-wontfix]: https://github.com/UtkarshVerma/hugo-dream-plus/issues?q=is%3Aopen+is%3Aissue+label%3Awontfix
[label-invalid]: https://github.com/UtkarshVerma/hugo-dream-plus/issues?q=is%3Aopen+is%3Aissue+label%3Ainvalid

[beginner]:https://github.com/UtkarshVerma/hugo-dream-plus/issues?q=is%3Aopen+is%3Aissue+label%3Abeginner+label%3Ahelp-wanted+sort%3Acomments-desc
[help-wanted]:https://github.com/UtkarshVerma/hugo-dream-plus/issues?q=is%3Aopen+is%3Aissue+label%3Ahelp-wanted+sort%3Acomments-desc+-label%3Abeginner

[label-work-in-progress]: https://github.com/UtkarshVerma/hugo-dream-plus/issues?q=is%3Aopen+is%3Apr+label%3Awork-in-progress
[label-needs-review]: https://github.com/UtkarshVerma/hugo-dream-plus/issues?q=is%3Aopen+is%3Apr+label%3Aneeds-review
[label-under-review]: https://github.com/UtkarshVerma/hugo-dream-plus/issues?q=is%3Aopen+is%3Apr+label%3Aunder-review
[label-requires-changes]: https://github.com/UtkarshVerma/hugo-dream-plus/issues?q=is%3Aopen+is%3Apr+label%3Arequires-changes
[label-needs-testing]: https://github.com/UtkarshVerma/hugo-dream-plus/issues?q=is%3Aopen+is%3Apr+label%3Aneeds-testing
