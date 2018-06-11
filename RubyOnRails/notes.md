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
