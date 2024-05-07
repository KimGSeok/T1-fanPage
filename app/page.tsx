import * as stylex from '@stylexjs/stylex';

export default function Home() {
  return (
    <div {...stylex.props()}>야호</div>
  )
}


// server action, next/font 사용 불가
// 사이드 프로젝트에서는 최대한 공식문서에서 업데이트된 최신 기능을 모두 사용해보려 노력하는 편이다.

// 이번에 사용해보고 싶었던 기능 중 하나는 Next.js의 Server Actions인데 올라온 이슈를 보면 안타깝게도 아직 babel 환경에서 지원하지 않는다. 그리고 next/font 역시 swc만 지원하기 때문에 사용이 불가하다. (아직 사용해보지 않은 기능들도 많은데, 발견하게 되면 추후에 업데이트 하겠다)

// 다행히 StyleX 측에서 Vercel과 얘기중이라고 하니 조만간 해결될 수 있지 않을까 한다.