import './header.css'
function Header() {
  return (
    <>
      <div className="header d-flex justify-content-evenly pt-3 pb-2">
        <h1>Kolb’s Learning Style Questionnaire</h1>
      </div>
      <div className="defination pt-2 pb-2 text-center">
        <p className='pe-5 ps-5'>This questionnaire is designed to find out your preferred learning styles(s) as an
          adult. Over the years, you have probably developed learning habits that help you
          benefit more from some experiences than from others. You may be unaware of this, and this
          questionnaire will help you pinpoint your learning preferences and share them with the other
          Community Facilitators.
        </p>
        <p className='pe-5 ps-5 pt-4 pb-4'>
          This questionnaire will probably take you about 10 minutes to complete. The accuracy of your
          results depends on how honest you are. There are no right or wrong answers. If you agree more
          than you disagree with a statement, choose (True). if  you disagree more than you agree, choose (false). If you find yourself wondering which
          situation to think of when answering a question, just think about how you are when you are working
          with people. Go with your first gut reaction instead of over-thinking your response.
        </p>
      </div>
    </>
  )
}
export default Header;