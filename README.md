#环境搭建 （react-native android）
需要准备的：

1. android手机一部（最好是安卓6以上，需要打开开发者模式， 打开USB调试，方便电脑链接，测试方式可以使用adb devices, 可以查看电脑链接的手机数量，
没有真机， 也可以使用模拟器
）
2.翻墙工具， 因为在安装android studio 的时候会翻墙安装一些SDK
3.配置好node环境之后，使用npm安装 npm install -g yarn react-native-cli （项目脚手架生成工具）
4.默认是intel 的处理器电脑，AMD 的电脑配置需要执行搜索，以为涉及到模拟器的运行


##步骤：

1.下载jdk（注意， 最新的jdk运行方式和RN 生成项目的gradle有一些冲突和不兼容， 需要做额外的处理）

  1.1. 配置JAVA_HOME，指向jdk安装的bin目录
  1.2. 配置path目录（因为打包编译的时候会用到，找cmd中输入java-version的时候能够正常输出为准）
  1.3. 配置ANDROID_HOME（这个指向android studio 的默认sdk目录）


2.下载android studio（这里有一些需要注意的地方）

  2.1. 安装的时候最好是在翻墙状态下， 因为一些sdk需要在外网环境才能正常安装和配置

  2.2. 以customer 的方式安装， 注意勾选Android SDK Android SDK Platform  Performance (Intel ® HAXM)   Android Virtual Device

  2.3 安装sdk,在SDK Manager 下面配置 （默认路径为c:\Users\你的用户名\AppData\Local\Android\Sdk）
      Android SDK Platform 28
      Intel x86 Atom_64 System Image

      最后这些sdk安装之后，需要在配置ANDROID_HOME 的时候指向这里
  2.4.  把 platform-tools 目录添加到环境变量 Path 中（默认路径为c:\Users\你的用户名\AppData\Local\Android\Sdk\platform-tools）

3.下载python（注意一定是2.xx版本，因为3以上的版本不兼容）

4.安装项目管理工具git（这个可有可无，可以忽略）

5.安装js运行环境node

6.配置模拟器，这里暂时不讲，直接在IDE中，根据步骤就可以配置了，然后通过adb-devices便可以测试

7.运行demo环境， 进入项目目录， 然后执行， react-native run-android

