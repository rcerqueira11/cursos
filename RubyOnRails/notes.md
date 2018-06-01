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