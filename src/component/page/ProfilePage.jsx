export default function ProfilePage() {
  return (
      <div className={'outline'}>
        <div className={'container'}>
          <div className={'content'}>

          <div className={'profile-container'}>
            <div className={'profile-img'}>
              <img className={'img'}
                   src={'https://velog.velcdn.com/images/hankyungeun/profile/a491d070-9ec6-4355-8062-636a64af00fd/image.jpg'}/>
            </div>
            <div className={'profile-text'}>
              안녕하세요. 신입 웹개발자 한경은 입니다.<br/>
              다양한 도전을 통해 경험을 쌓으며 매일 조금씩 배우고 성장하고 싶습니다.<br/>
              누구나 쉽고 편하게 사용할 수 있는 사용자 친화적인 프로그램을 만드는 개발자가 되겠습니다.<br/>
              잘부탁드립니다.
            </div>
          </div>
          <div className={'detail-container'}>
            <div className={'detail-title'}>Skills</div>
            <div className={'skills'}></div>
          </div>
        </div>
      </div>
          </div>
  )
}