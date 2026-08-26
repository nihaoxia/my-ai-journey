# DOCKERFILE
蜜雪冰城 **标准操作手册SOP** 写清楚 "先加奶茶，再加奶，放三勺糖，摇匀"
任何人照着做，出来的味道都一样，就成了连锁店

DOCKERFILE 是一个**文本配方文件**， 里面写着一步步“做菜”的指令，
DOCKER 照着做，它就能自动做出一摸一样的Docker 镜像,运行

构建镜像 
  docker build -t my-hello .
  docker login  -> github
  docker push my-hello
  docker pull

  Dockerfile 是发布项目的标准方式之一
