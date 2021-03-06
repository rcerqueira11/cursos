"""tags

Revision ID: 50a6525f1353
Revises: 42bb9bde1549
Create Date: 2017-08-22 14:44:39.763358

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '50a6525f1353'
down_revision = '42bb9bde1549'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('tag',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=25), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_tag_name'), 'tag', ['name'], unique=True)
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(length=80), nullable=True),
    sa.Column('email', sa.String(length=120), nullable=True),
    sa.Column('password_hash', sa.String(), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('username')
    )
    op.create_table('bookmark',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('url', sa.Text(), nullable=False),
    sa.Column('date', sa.DateTime(), nullable=True),
    sa.Column('description', sa.String(length=300), nullable=True),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('bookmark_tag',
    sa.Column('tag_id', sa.Integer(), nullable=True),
    sa.Column('bookmark_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['bookmark_id'], ['bookmark.id'], ),
    sa.ForeignKeyConstraint(['tag_id'], ['tag.id'], )
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('bookmark_tag')
    op.drop_table('bookmark')
    op.drop_table('user')
    op.drop_index(op.f('ix_tag_name'), table_name='tag')
    op.drop_table('tag')
    # ### end Alembic commands ###
