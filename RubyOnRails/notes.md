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
def automated_paginater(collection, param_name = 'page', number_of_links = 1)
  will_paginate collection, previous_label: 'Anterior', param_name: param_name, next_label: 'Siguiente', inner_window:number_of_links, renderer: BootstrapPagination::Rails
end

```

```rb
@billed_mobile = @billed.paginate(page: params[:billed_page], per_page: 5)
@no_billed_mobile =  @no_billed.paginate(page: params[:no_billed_page], per_page: 5)
```

```haml
=automated_paginater(@billed_mobile, "billed_page")
=automated_paginater(@no_billed_mobile, "no_billed_page")
```

## Check changed values

```
claim.status_changed?  # returns true if 'status' attribute has changed
claim.status_was       # returns the previous value of 'status' attribute
claim.status_change    # => ['old value', 'new value'] returns the old and
                       # new value for 'status' attribute

claim.name = 'Bob'
claim.changed # => ["name"]
claim.changes # => {"name" => ["Bill", "Bob"]}
```


## Hash values to hash

```rb
a.values.reduce({}, :merge)
```

## Date between the month

```rb
where("start_at >= ? AND start_at <= ?", Time.zone.now.beginning_of_month, Time.zone.now.end_of_month)
```

## Avoid where in loop

```rb
  answers_array = []
  question_ids = params[:answers].values.map { |v| v[:question_id] }.uniq
  answers = @survey.answers.where(question_id: question_ids, user_id: current_user.id)
  params[:answers].values.each do |answer_params|
    if answer_params[:option_id]
      answer = answers.detect { |a| a.question_id == answer_params[:question_id].to_i && a.user_id == current_user.id }
      answer ||= Answer.new(question_id: answer_params[:question_id], user_id: current_user.id )
      answer.option_id = answer_params[:option_id]
      answers_array << answer
      # errors[:base] << "La respuestas de la #{k}° moción tiene un valor inválido" unless answer.save
    end
  end
  Answer.import(answers_array.reject(&:id))
  answers_array.select(&:id).each(&:save)
```

### Rescue

```rb
begin
rescue => e
  puts e
  Rollbar.log("error",e)
  Rollbar.error(e, community_id: self.community_id)
  self.error = "Ha ocurrido un error importando el Excel" # en la fila #{row_counter}"
  self.error += (errors.to_s.gsub(']','').gsub('[','').gsub('"',''))
  # self.error += e.backtrace.join("\n")
  # self.error += e.to_s
  self.imported = false
  self.save
  self.send_email
end
```

## Polymorphic table

```rb
# id.rb
#  id                 :integer          not null, primary key
#  identificable_id   :integer
#  identificable_type :string
#  identity           :string
#  identity_type      :string`
class Identification < ActiveRecord::Base
  belongs_to :identificable, polymorphic: true

  validates_uniqueness_of :identity_type, scope: [:identificable_id, :identificable_type], message: " ya utilizada"

  validates :identity, uniqueness: true

end

#user
has_many :identifications, as: :identificable




```