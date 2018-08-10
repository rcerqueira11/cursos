## As a matter of discipline, each action in the controller should only take one of two forms:

```rb
# reading type operation
def index
  @resource = Resource.all
end
# create, update, delete type operations
def create
  if @resource.save
    redirect_to somewhere_path
  else
    render :new
  end
end
```