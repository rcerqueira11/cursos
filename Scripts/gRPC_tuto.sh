export REPO_ROOT=grpc # REPO root can be any directory of your choice
git clone -b $(curl -L https://grpc.io/release) https://github.com/grpc/grpc $REPO_ROOT
cd $REPO_ROOT

cd examples/node
npm install