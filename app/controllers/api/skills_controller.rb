class Api::SkillsController < ApplicationController

  def create
    puts "################ #{current_user.id} #{params[:skill][:user_id]}"
    if current_user.id == params[:skill][:user_id].to_i
      skill = current_user.skills.create(title: params[:skill][:title])
    
      if skill.save
        render json: skill, status: :created
      else
        render json: { errors: skill.errors }, status: :unprocessable_entity
      end
    end
  end

  def update
    id = params[:id]
    skill = Skill.find(id)
    if current_user.id == skill.user.id
      skill.title = params[:skill][:title]
    
      if skill.save
        render json: {}, status: :ok
      else
        render json: { errors: skill.errors }, status: :unprocessable_entity
      end
    end
  end

  def index
    # Really raw -> be carefull performances !
    render json: Skill.all
  end
end