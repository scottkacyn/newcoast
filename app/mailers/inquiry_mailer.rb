class InquiryMailer < ActionMailer::Base
  default :from => "scott@newcoastventures.com"
  default :to => "scott@newcoastventures.com"

  def new_message(message)
    @message = message
    mail(:subject => "NCV Business Inquiry")
  end
end
