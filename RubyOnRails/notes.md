## Queries hash

```rb
communities = current_user.communities.uniq
common_spaces = CommonSpace.joins(:community).where(community_id: communities.map(&:id))
@common_spaces_hash = common_spaces.group_by(&:community)
```

## How to remove HTML markup from string

```rb
ActionView::Base.full_sanitizer.sanitize(@string)
```


## Order hash and return a hash

```rb
@hash= Hash[hash.sort_by { |k, _| _["date_start"]]
```

## Selector on change

```rb
 =form_tag({controller: 'dashboard',action: 'change_property', format: 'js'}, method: :get, :remote => true) do
  = select_tag(:property_id, options_from_collection_for_select(current_user.properties, "id", "name", selected: current_property.id),class: "form-control select_base base_color" , onchange: "$(this.form).submit();")

```

### With multiple rows in the name

```rb
#property.rb (model)
def prop_with_community
  "#{name} - #{community}"
end

#.html.haml

 =form_tag({controller: 'dashboard',action: 'change_property', format: 'js'}, method: :get, :remote => true) do
  = select_tag(:property_id, options_from_collection_for_select(current_user.properties, "id", :prop_with_community, selected: current_property.id),class: "form-control select_base base_color" , onchange: "$(this.form).submit();", style: 'display: none;' ,include_blank: 'name of your blank prompt')



```


## Creating migrations

```bash
rails g migration NombreDeLaMigracion

```

```rb
#fecha_NombreDeLaMigracion.rb

class NombreDeLaMigracion < ActiveRecord::Migration
  def change
    add_column :table, :column, :type
    add_column :surveys, :closed, :boolean, default: false
  end
end

```

```bash
rake db:migrate
```

## Multiple paginators


```rb
@billed_mobile = @billed.paginate(page: params[:billed_page], per_page: 5)
@no_billed_mobile =  @no_billed.paginate(page: params[:no_billed_page], per_page: 5)
```

```haml
=automated_paginater(@billed_mobile, "billed_page")
=automated_paginater(@no_billed_mobile, "no_billed_page")
```