class LandingsController < ApplicationController
  def index
  	@message = Message.new
  end

  def send_inquiry
    @message = Message.new(params[:message])
    
    if @message.valid?
      InquiryMailer.new_message(@message).deliver
      redirect_to(root_path, :notice => "Message was successfully sent.")
    else
      flash.now.alert = "Please fill all fields."
      render :new
    end
  end
end
