




## Alternative: authorize_resource (no model)
Alternatively you can use the authorize_resource and specify that there's no class. This way it will pass the resource symbol instead. This is good if you still have a Resource-like controller but no model class backing it.

```rb
class ToolsController < ApplicationController
  authorize_resource :class => false
  def show
    # automatically calls authorize!(:show, :tool)
  end
end
```


## Conditionally Check Authorization
As of CanCan 1.6, the check_authorization method supports :if and :unless options. Either one takes a method name as a symbol. This method will be called to determine if the authorization check will be performed. This makes it very easy to skip this check on all Devise controllers since they provide a devise_controller? method.
```rb
class ApplicationController < ActionController::Base
  check_authorization :unless => :devise_controller?
end
```
Here's another example where authorization is only ensured for the admin subdomain.
```rb
class ApplicationController < ActionController::Base
  check_authorization :if => :admin_subdomain?
  private
  def admin_subdomain?
    request.subdomain == "admin"
  end
end
```
Note: The check_authorization only ensures that authorization is performed. If you have authorize_resource the authorization will still be performed no matter what is returned here.