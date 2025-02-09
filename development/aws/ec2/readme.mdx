# AWS EC2

## 보안 모범 사례

1. **IAM**를 통한 AWS 리소스 액세스 제어
2. **신뢰할 수 있는 호스트나 네트워크**만 인스턴스 포트에 액세스할 수 있도록 제한
3. 보안 그룹의 규칙을 정기적으로 검토하고 _**최소 권한 부여**_라는 개념을 항상 적용하고 필요한 경우 **필요한 권한만 허가**
4. AMI 실행 인스턴스는 비밀번호를 사용한 로그인을 비활성화하여 보안 위험을 최소화

## Amazon Machine Image(AMI)

인스턴스를 시작하는 데 필요한 구성을 제공하는 AWS에서 유지하고 관리하는 이미지. OS 및 애플리케이션 서버, 애플리케이션이 포함된 일종의 템플릿이다.

지원하는 운영 체제

* Amazon Linux 2
* Red Hat Enterprise Linux
* CentOS
* SUSE
* Debian
* Ubuntu
* Windows server
* etc...

## Instance types

인스턴스는 AMI의 사본이다. 서버 인스턴스 유형은 규칙에 따라 알파벳의 조합으로 분류된다. 각각 컴퓨팅 스토리지 메모리 등 특화된 분야를 나타내기도 하고, 인스턴스 사이즈 medium, large 등을 통해 인스턴스가 얼마나 큰지를 쉽게 비교할 수 있고 사이즈가 클수록 성능과 가격이 증가한다

![이미지는 인스턴스 이름의 각 부분에 대한 레이블과 함께 인스턴스 유형 c7gn.xlarge를 보여줍니다.](assets/instance-type-name.png)

* Istance family(인스턴스 패밀리): 범용, 특정 분야 특화 등 인스턴스의 특징을 표현
* Istance generation(인스턴스 세대): 숫자가 높을 수록 성능이 좋은 세대를 표현
* Processor family(프로세서 패밀리): 사용하는 프로세서 표현
* Additional capability(추가 기능): 추가 스토리지 또는 네트워크 최적화 등 추가 기능 표현

인스턴스 명명 규칙

https://docs.aws.amazon.com/ko\_kr/AWSEC2/latest/UserGuide/instance-types.html

인스턴스 유형 탐색기

https://aws.amazon.com/ko/ec2/instance-types/

## EBS

EC2 전용으로 설계된 고성능 블록 스토리지 서비스로 스토리지 볼륨을 만들어 EC2에 연결하여 사용할 수 있다. 고성능 IOPS을 위한 SSD 지원 스토리지와 처리량 집약적인 HDD 지원 스토리지가 있다. AWS는 EBS와 함께 인스턴스 스토어 EFS, S3 등의 스토리지 서비스도 제공한다.

https://docs.aws.amazon.com/ko\_kr/AWSEC2/latest/UserGuide/AmazonEBS.html

## VPC

EC2에서 네트워크에 연결하기 위해 사용. Amazon VPC는 사용자가 논리적 가상 네트워크를 구축하고 사용할 수 있도록 한다. 프라이빗 IP 주소를 제공한다.

https://docs.aws.amazon.com/ko\_kr/AWSEC2/latest/UserGuide/ec2-networking.html

## 보안 그룹

보안 그룹은 AWS에서 제공하는 인스턴스 보안을 유지하기 위한 도구로써 인스턴스에 대한 수신 트래픽(**인바운드 규칙**), 발신 트래픽(아웃바운드 규칙)을 제어하는 가상의 방화벽 역할을 수행한다. 보안 그룹 규칙은 어떤 것을 허용할 지를 결정하며, 거부하는 규칙은 생성할 수 없다.

https://docs.aws.amazon.com/ko\_kr/AWSEC2/latest/UserGuide/ec2-security-groups.html

## 키 페어

**퍼블릭 키**와 **프라이빗 키**로 구성되는 키 페어는 EC 인스턴스 연결 시 사용되는 자격 증명 입증을 위한 것이다. 퍼블릭키는 EC2에 저장되며, 프라이빗 키는 **키 페어 생성 시 최초 한 번 로컬로 다운로드** 받아 사용자가 저장한다. 사용자는 이 프라이빗 키를 사용하여 SSH를 통해 **인스턴스에 연결**할 수 있다
