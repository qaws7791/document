# Lambda

서버리스 컴퓨팅 서비스

서버리스(severless): 서비스 실행을 위한 서버를 AWS에서 관리. 사용자는 서버를 관리할 필요가 없어지고 Lambda에서 사용할 프로그램 코드만 작성

- Function-as-a-Service
- No Infrastructure provisioning, No management: 서버 관리 없이 코드를 실행
- Automatic scaling: 자동 스케일링
- Pay for Value: 사용한 만큼만 비용 지불
- Highly available and secure: 높은 가용성 및 보안





> - 달리 지정되지 않는 한, 수신 요청은 비순차적으로, 또는 동시에 처리될 수 있습니다.
> - 오래 지속되는 함수의 인스턴스를 사용하지 말고 대신 애플리케이션의 상태를 다른 곳에 저장하세요.
> - 로컬 스토리지 및 클래스 수준 객체를 사용하여 성능을 강화할 수 있지만, 실행 환경으로 전송하는 배포 패키지의 크기와 데이터의 양을 최소로 유지하세요.



## Lambda 개념

- 함수(Function): Lambda에서 코드를 실행하기 위한 리소스. Lambda에서는 함수 단위로 코드를 실행하여 Lambda 함수라고 부름
- 트리거(Trigger): Lambda 함수를 호출하는 리소스 또는 구성. 다른 AWS 서비스가 호출 하도록 할 수 있음
- 이벤트(Event): 처리할 Lambda 함수에 대한 json 형식의 데이터를 포함하는 문서
- 실행 환경(Execution environment): Lambda 함수의 런타임 환경을 위한 안전하고 격리된 환경
- 명령 세트 아키텍처(Instruction set architecture): Lambda 함수가 실행되는 컴퓨터 프로세서의 유형. `arm64`와 `x86_64`를 지원
- 배포 패키지(Deployment package): Lambda 함수 코드 배포를 위한 패키지. `.zip 파일` 또는 `OCI 호환 컨테이너 이미지`를 지원
- 런타임(Runtime): 실행 환경에서 실행되는 언어별 환경. 제공되는 런타임 또는 커스텀 런타임을 빌드할 수 있음
- 레이어(Layer): 추가 코드, 콘텐츠를 포함할 수 있는 `.zip 파일`. 라이브러리, 사용자 정의 런타임, 데이터구성 파일을 포함. 배포 아카이브 크기 감소를 통한 더 빠른 배포. 코드 공유 및 책임 분리
- 익스텐션(Extension): Lambda 함수 보강을 위한 수단으로 모니터링, 관찰, 보안, 거버넌스 도구등을 통합. AWS Lambda 파트너에서 다양한 도구를 제공하며 자체적인 익스텐션을 만들어 사용할 수도 있다
- 동시성(Concurrency): 특정 시각에 함수가 제공하는 요청 수. 함수 요청 처리 중 다시 호출 시 함수의 동시성 증가

## Lambda 지원 언어

2024년 1월 11일 기준

- Node.js
- Python
- Ruby
- Java
- Go
- C#
- PowerShell



## Lambda vs EC2

Lambda에 비해 EC2가 유리한 경우

1. Lambda는 함수 단위로 실행되기 때문에 온프레미스의 응용 프로그램을 실행시키기 어렵다. EC2는 OS 설정 등을 한 후 그대로 사용할 수 있다
2. EC2는 인스턴스의 유형부터, 구동되는 OS, 네트워크 등 하드웨어를 자유롭게 설정할 수 있다.
3. 대규모의 트래픽이 발생하거나 항상 접속이 필요한 경우에는 EC2의 비용이 더 저렴할 수 있다

