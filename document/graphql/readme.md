# GraphQL

[TOC]

------

# GraphQL이란

- API를 위한 퀴리 언어
- 쿼리를 실행하는 서버사이드 런타임
- 선언형(declarative) 데이터 페칭(fetching) 언어
- GraphQL은 클라이언트와 서버 간의 통신 명세

## GraphQL 설계 원칙

1. 위계적
   1. 필드안에 다른 필드 중첩 가능
   2. 그에 대한 반환 데이터는 서로 같은 형태
2. 제품 중심적
   1. 클라이언트가 요구하는 데이터, 지원 언어, 런타임에 맞춰 동작
3. 엄격한 타입 제한
   1. GraphQL 타입 시스템 사용
   2. 스키마의 데이터 포인트마다 특정 타입 명시
   3. 이를 기초로 유효성 검사
4. 클라이언트 맞춤 쿼리
   1. 클라이언트가 사용할 수 있는 데이터를 제공
5. 인트로스펙티브(instrospective)
   1. GraphQL 언어를 사용해 GraphQL 서버가 사용하는 타입 시스템에 대한 쿼리 작성 가능

## REST 단점

### 오버페칭(overfetching)

- 불필요한 데이터까지 받아오는 경우 낭비
- GraphQL은 필요한 필드만 정의하여 요청 가능

### 언더페칭(underfetching)

- 데이터를 불러오고 그 데이터를 통해 다시 추가 데이터를 요청하는 번거로움 발생
- GraphQL은 쿼리를 중첩으로 정의하여 한번의 패치로 필요한 모든 데이터를 받아 올 수 있음

### 엔드포인드(endpoint) 관리

- 클라이언트 수정시 엔드포인트 다시 작성

## GraphQL 쿼리어

SEQUEL(Structured English Query Language): 구조화된 영문 쿼리 언어. SQL

- 도메인 종속 언어
- 명령어 한번으로 복수의 레코드 접근 가능
- 명령어: `SELECT` `INSERT`, `UPDATE`, `DELETE`
- 쿼리를 데이터베이스로 보냄
- 데이터는 데이터 테이블 안에 저장

GraphQL

- 데이터를 API로 전송
- 데이터는 저장환경을 가리지 않음
- 데이터 수정시 `mutation` 사용

## GraphQL API 툴

- ### GraphiQL

- ### GraphQL 플레이그라운드



# GraphQL쿼리

## 쿼리(query)

### 기본 요청

- 요청 데이터를 필드로 적어 전송

```graphql
모든 lift의 배열과 각 리프트에 대한 name과 status 요청
query{
	allLifts{
		name
		status
	}
}
```

### 여러 쿼리 한번에 요청

- 여러 쿼리를 정의 가능하지만 한 작업에 한 쿼리만 요청
- 여러 쿼리 요청시 하나의 쿼리로 묶어 사용

```graphql
query liftsAndTrails {
	liftCount(status: OPEN)
	allLifts {
		name
		status
	}
	allTrails {
		name
		difficulty
	}
}
```

### 원하는 필드명으로 응답받기

- 기본적으로 응답인 JSON의 필드명은 쿼리의 필드명과 동일
- 필드명을 다르게 받고 싶다면 쿼리의 필드명에 별칭을 부여

```graphql
query liftsAndTrails {
	open: liftCount(status: OPEN)
	chairlifts: allLifts {
		liftName: name
		status
	}
	skiSlopes: allTrails {
		name
		difficulty
	}
}
```

### 쿼리 필터링

- status값이 CLOSED인 리프트의 데이터만 받기

```graphql
query closedLifts {
	allLifts(status: CLOSED){
		name
		status
	}
}
```

- id를 통해 특정 리프트 데이터만 받기

```graphql
query jazzCatStatus {
	Lift(id: "jazz-cat"){
		name
		status
		night
		elevationGain
	}
}
```

## 엣지와 연결

- GraphQL의 필드는 **스칼라 타입**과 **객체 타입** 중 하나

### **스칼라 타입**

- 정수(Int)
- 실수(Float)
- 문자열(String)
- 불(Boolean)
- 고유식별자(ID): 반드시 유일한 문자열을 반환
- 정수,실수는 숫자 데이터 반환,
- 문자열,불,고유식별자는 문자열 데이터 반환

### **객체 타입**

- 스키마에 정의한 필드를 그룹으로 묶어 둔 것
- 응답으로 반환되어야 할  JSON 객체의 형태
- 객체 중첩 가능

- 리프트와 코스 데이터 타입 사이의 일대다 연결
- Lift 노드 -> 여러 Trail 노드(jazz-cat 리프트와 연관된 코스)

```graphql
query trailsAccessdByJazzCat {
	Lift(id:"jazz-cat"){
		capacity
		trailAccess{
			name
			difficulty
		}
	}
}
```

- Trail 노드 -> Lift 노드 (dance-fight 코스와 연관된 lift )

```graphql
query liftToAccessTrail {
	Trail(id:"dance-fight"){
		groomed
		accessedByLifts {
			name
			capacity
		}
	}
}
```

## 프래그먼트(fragment)

- 프래그먼트는 셀렉션 세트의 일종으로 여러 번 재사용 가능
- 프래그먼트 퀴리의 중복되는 부분을 줄일 수 있음

```graphql
query {
	Lift(id: "jazz-cat"){
		name
		status
		capacity
		night
		elevationGain
		trailAccess{
			name
			difficulty
		}
	}
	Trail(id: "river-run"){
		name
		difficulty
		accessedByLifts{
		name
		status
		capacity
		night
		elevationGain
		}
	}
}
```

- 여기서 중복되는 부분을 프래그먼트로 처리

```graphql
fragment liftInfo on Lift {
	name
	status
	capacity
	night
	elevationGain
}
```

- 프래그먼트 앞에 점 세 개를 찍어 표시

```graphql
query {
	Lift(id: "jazz-cat"){
		...liftInfo
		trailAccess{
			name
			difficulty
		}
	}
	Trail(id: "river-run"){
		name
		difficulty
		accessedByLifts{
		...liftInfo
		}
	}
}
```

- 유지보수시 프래그먼트의 한차례 수정만하면 되므로 편리 

## 유니언 타입(union type)

- 타입 여러 개를 한 번에 리스트에 담아 반환하기 위해 사용
- 두 가지 타입을 하나의 집합으로 묶는 역할
- **인라인 프래그먼트**: 유니언 타입에서 여러 타입의 객체를 반환할 때, 각각의 객체가 어떤 필드를 반환할지 정의

```graphql
query schedule {
	agenda {
	...on Workout { //Workout 객체일 때 반환되는 필드
		name
		reps
	}
	}
	...on StudyGroup { // StudyGroup 객체일 때 반환되는 필드
		name
		subject
		students
	}
}
```

## 인터페이스(interface)

- 필드 하나로 객체 타입을 여러 개 반환할 때 사용
- 타입이 포함해야하는 필드들을 정의하는 추상 타입

```graphql
interface Character {
	id: ID!
	name: String!
	friends: [Character]
	appearsIn:[Episode]!
}
```

```graphql
type Human implements Character {
	id: ID!
	name: String!
	friends: [Character]
	appearIn: [Episode]!
	starships: [Starship]
	totalCredits: Int
}
```

## 뮤테이션(mutation)

- 데이터를 새로 쓰는 행위
- 쿼리와 다르게 백엔드 데이터에 영향을 주는 행위
- 새로운데이터 생성

```graphql
mutation createSong {
	addSong(title:"No Scrubs", numberOne: true, performerName: "TLC"){ // 새로운 데이터를 생성
		id
		title
		numberOne
	}
}
```

- 기존 데이터 변경

```graphql
mutation closeLift {
	seLiftStatus(id: "jazz-cat", status:CLOSED){//status를 CLOSED로 변경
		name
		status
	}
}
```

### 쿼리 변수 사용

- 변수명 앞에 **$ 문자**를 붙여 사용

```graphql
mutation createSong($title:String!, $numberOne:Int, $by:String!) {
	addSong(title:$title, numberOne:$numberOne, performerName:$by){ // 새로운 데이터를 생성
		id
		title
		numberOne
	}
}
```

## 서브스크립션(subscription)

- 서버에서 푸시 중인 업데이트의 내역을 실시간으로 클라이언트에서 받아야 할 때 사용
- GraphQL API를 사용해 실시간 데이터 변경 내용을 받을 수 있음
- 페이스북에서 웹 페이지의 새로고침없이 ""좋아요 개수""를 실시간으로 보여줄 방법으로 사용

```graphql
subscription {
	liftStatusChange{
		name
		capacity
		status
	}
}
```

- 서브스크립션 시작시 웹소켓으로 변경 내용을 실시간으로 받음

## 인트로스펙션(Introspection)

- 현재 API 스키마의 세부 사항에 관한 쿼리를 작성 가능
- 주어진 API 스키마를 통해 어떤 데이터를 반환받을 수 있는지 조사
- 어떤 GraphQL 타입을 사용하는지 조사

```graphql
query {
	__schema{
		type{
			name
			description
		}
	}
}
```

- 특정 타입에 관한 세부 사항 조사

```graphql
query liftDetails{
	__type(name:"Lift"){
		name
		fields{
			name
			description
			type{
			name
			}
		}
	}
}

```

## 추상 구문 트리(abstract syntax tree, AST;)

- 쿼리 문서는 문자열로 이루어져 있다
- GraphQL API로 쿼리 전송시 문자열은 추상 구문 트리로 파싱되어
  명령 실행 전 유효성 검사
- AST는 계층 구조를 지닌 객체로 쿼리 표현시 사용
- **첫 단계** **어휘화, 어휘 분석**: 문자열을 더 작은 조각으로 쪼개어 분석
- 쿼리에는 최소한 하나 이상의 정의가 포함되며
  여러 개의 정의가 리스트로 들어 있을 수도 있음
- 정의의 종류
  - OperationDefinition: mutation, query, subscription의 데이터 작업 정의
  - FragmentDefinition: 프래그먼트 정의
- 각 작업 정의에는 중괄호 안에 SelectionSet이 포함
  - 쿼리 작업이 진행되는 실제 필드
- GraphQl은 AST를 횡단하며 GraphQL 언어와 현재 스키마를 비교하여 유효성 검사
- 즉 모든 작업은 AST로 가공되어 유효성 검사 후 실행

# 스키마 설계하기

- 스키마(Schema): 서비스에서 사용할 작업과 필드를 미리 정의한 데이터 타입의 집합
- GraphQL은 SLD(Schema Definition Language,스키마 정의 언어)를 지원

## 타입 정의하기

- 서비스에서 필요한 타입을 정의

## 타입(type)

- 스키마를 정의한다는 것은 팀에서 도메인 객체에 관해 이야기할 때 사용할 공통의 언어를 정의하는 것
- **필드(field)**를 포함
- 스키마는 자바스크립트 파일(.js)이나 텍스트 파일(.graphql)등에 작성

```graphql
type Photo {
	id: ID!
	name: String!
	url: String!
	description: String
}
```

- **!**는  그 필드에서 null 값을 허용하지 않음을 의미=> 반드시 데이터 반환

## 스칼라 타입(scalar type)

- GraphQL의 내장 스칼라 타입(Int, Float, String, Boolean, ID)
- 스칼라 타입을 직접 정의하는 것도 가능.
- 객체가 아니기 때문에 필드를 가지지 않음

```graphql
scalar DateTime

type Photo {
	id:ID!
	name:String!
	url:String!
	description:String
	created:DateTime!
}
```

-  커스텀 스칼라 타입을 사용하면 반환 문자열 값이 직렬화, 유효성검사를 거쳤는지,
- 공식 날짜,시간 형식이 맞는지 검사 가능
- **유효성검사**가 필요한 타입 -> 커스텀 스칼라 타입

## 열거 타입(enumeration type)

- 스칼라 타입에 속하는 타입
- 필드에서 반환하는 문자열 값을 세트로 미리 지정 가능
- 이 세트를 사용해 미리 지정해둔 값만 필드에서 반환하도록 설정

```graphql
enum PhotoCategory {
	SELFIE
	PORTRAIT
	ACTION
	LANDSCAPE
	GRAPHIC
}
```

```graphql
type Photo{
	id:ID!
	name:String!
	url:String!
	description:String
	created:DateTime!
	category:PhotoCategory!
}
```

## 리스트 반환과 연결

- GraphQL 타입이 담긴 리스트 반환도 가능
- GraphQL타입을 대괄호로 감싸서 만듦
- ex) [String]. [PhotoCategory]

| 리스트 선언 |                         정의                          |
| :---------: | :---------------------------------------------------: |
|    [Int]    |        리스트 안의 정수 값은 null이 될 수 있음        |
|   [Int!]    |        리스트 안의 정수 값은 null이 될 수 없음        |
|   [Int]!    |            리스트 자체는 null이 될 수 없음            |
|   [Int!]!   | 리스트 안의 정수 값과 리스트 자체가 null이 될 수 없음 |

### 일대일 연결

- 엣지(edge): 두 객체 사이의 연결
- 일대일연결: 하나의 객체 타입이 다른 객체타입과 서로 연결
- 모든 사진은 게시자(postedBy)가 존재

```graphql
type User {
	githubLogin: ID!
	name: String
	avatar: String
}
type Photo {
	id:ID!
	name: String!
	url: String!
	description: String
	created: DateTime!
	category: PhotoCategory!
	postedBy: User!
}
```

