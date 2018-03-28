---
title: "Testing \"django-netjsonconfig\""
date: 2018-01-14T14:28:40+05:30
tags:
- google code in
- openwisp
- django
categories:
- programming
description : "The challenges which I faced while installing and using **django-netjsonconfig**. "
cover: "images/netjsonconfig/django2.png"
draft: false
---
A task came up in Google Code-in which asked me to install the [django-netjsonconfig](https://github.com/openwisp/django-netjsonconfig) module by [OpenWISP](https://www.openwisp.org). Furthermore, I'm also supposed to share the challenges I faced during the set-up process as a sort of feedback. I'll be trying be concise in this post so, without further ado, I'm beginning with this post.

# Installing "django-netjsonconfig"
The installation instructions for this this module have been well-documented on its [GitHub repository](https://github.com/openwisp/django-netjsonconfig#installing-for-development). So I began the installation by creating a **Python 2.7 Virtual Environment** using `python2 -m virtualenv py2` for the sake of cleanliness on my local machine. I chose `python2` for since for this since I was also on the lookout for bugs in the module and most of the bugs seem to be related with it since it's a bit outdated now.  
I then activated the `virtualenv` and started entering the installation commands according to the instructions in the repository. Everything went on smoothly until the `python setup.py develop` command. I got an error as shown in the below picture.

![develop failed](/images/netjsonconfig/django2.png)

Clearly, the error suggests that **Django v2.0.1** was being downloaded which **isn't supported** by **Python 2.7**. A bit of browsing led me to the conclusion that the `setup.py` needed to be modified to download **older Django versions** for Python 2.7. So, I added a simple `if-else` block to the django installation statement as shown in the picture.  

![setup.py fix](/images/netjsonconfig/my-fix.png)

If you're curious about my fix,  this is the [link](https://github.com/UtkarshVerma/django-netjsonconfig/commit/1575acbbc719e539cd8ecbffc761d8b9c2023d56).

Here, what's being done is basically:

- Detect `python` version used for installation using `sys.version_info[0]`.
- Install older Django versions if `sys.version_info[0]<3`, that is `python2` is detected.
- Install latest version if above condition isn't satisfied, that is `python3` is detected.

I also had to remove the django installation line from `requirements.txt` since `setup.py` was fetching the requirement names from there. After applying this fix, I re-ran the `python setup.py develop` command and there it was! The sweet smell of success. Now an **older yet python2 compatible** version of **Django** was being installed when using `python2` as clearly shown in one of the pictures below:

![Older Django being downloaded](/images/netjsonconfig/django-v-fixed.png)

![Successful!](/images/netjsonconfig/Success!.png)

After this, I installed some more requirements using `pip install -r requirements-test.txt`
This was how I'd finished installing `django-netjsonconfig` using Python2. Now all that was left to do was to to do the migrations and run the server.

# Making Migrations and Creating a superuser
By referring to the instructions on the repo again, I opened the `tests` directory,
did the migrations using `./manage.py migrate`. It was really satisfying to see all the CLI responses coloured in **green**. :smile:
![Migrate](/images/netjsonconfig/migrate.png)

After that, there was the superuser creation using `./manage.py createsuperuser`.

![Superuser creation](/images/netjsonconfig/superuser.png)

# Running the Test Server
I started the test server using `./manage.py runserver` and it was successful. 

![Server Up and Running!](/images/netjsonconfig/up-and-running.png)

I could also now visit the server at [http://localhost:8000/admin](http://localhost/admin).   

![Logged In](/images/netjsonconfig/logged-in.png)

# Conclusion
So, that's how I installed the **django-netjsonconfig** module. Also, I've commited my fixes to my **forked repo** [here](https://github.com/UtkarshVerma/django-netjsonconfig). Here's the [link to my pull request](https://github.com/openwisp/django-netjsonconfig/pull/71). That concludes this post.
