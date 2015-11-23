#!/bash/bin

# this script is used to fix the config on Ubuntu
# when reinstall OS.

#1. Install basic tools & software


#2. fix environment
#2.1 fix file encoding of geidt for chinese character
gsettings set org.gnome.gedit.preferences.encodings auto-detected "['UTF-8','CURRENT','GB18030','ISO-8859-15','UTF-16']"



