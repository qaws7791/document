

# Yaml

사람이 직접 쓰고 읽을 수 있도록 설계된 데이터 직렬화된 언어

json의 엄격한 슈퍼셋


### 배열(sequence)

- yaml

  ```yaml
  - apple 
  - banana 
  - carrot 
  ```

- json

  ```json
  [
    "apple",
    "banana",
    "carrot"
  ]
  ```


### 배열 중첩

- yaml

  ```yaml
  - 
   - foo 
   - bar 
   - baz 
  ```

- json

  ```json
  [
    [
      "foo",
      "bar",
      "baz"
    ]
  ]
  ```


### 객체(Mapping)

- yaml

  ```yaml
  foo: whatever 
  bar: stuff 
  ```

- json

  ```json
  {
    "foo": "whatever",
    "bar": "stuff"
  }
  ```


### 객체 중첩

- yaml

  ```yaml
  foo: whatever 
  bar: 
   fruit: apple 
   name: steve 
   sport: baseball 
  
  ```

- json

  ```json
  {
    "foo": "whatever",
    "bar": {
      "fruit": "apple",
      "name": "steve",
      "sport": "baseball"
    }
  }
  ```


### 객체 속의 배열

- yaml

  ```yaml
  foo: whatever 
  bar: 
   - uno 
   - dos 
  ```

- json

  ```json
  {
    "foo": "whatever",
    "bar": [
      "uno",
      "dos"
    ]
  }
  ```


### 배열에서 객체 축약

- yaml

  ```yaml
  - work on YAML.py: 
     - work on Store 
  
  ```

- json

  ```json
  [
    {
      "work on YAML.py": [
        "work on Store"
      ]
    }
  ]
  ```


### 객체에서 배 축약

- yaml

  ```yaml
  allow:
  - 'localhost'
  - '%.sourceforge.net'
  - '%.freepan.org'
  
  ```

- json

  ```json
  {
    "allow": [
      "localhost",
      "%.sourceforge.net",
      "%.freepan.org"
    ]
  }
  ```


### 객체 병합

병합 키(`<<`)를 사용하여 객체 속에 객체를 삽입

- yaml

  ```yaml
  mapping:
    name: Joe
    job: Accountant
    <<:
      age: 38
  
  ```

- json

  ```json
  {
    "mapping": {
      "name": "Joe",
      "job": "Accountant",
      "age": 38
    }
  }
  ```


------


## 인라인

인라인에서 각각의 아이템 ,(콤마) 뒤에는 공백이 필요


### 인라인 배열

- yaml

  ```yaml
  seq: [ a, b, c ] 
  ```

- json

  ```json
  {
    "seq": [
      "a",
      "b",
      "c"
    ]
  }
  ```


### 인라인 객체

- yaml

  ```yaml
  hash: { name: Steve, foo: bar } 
  ```

- json

  ```json
  {
    "hash": {
      "name": "Steve",
      "foo": "bar"
    }
  }
  ```


### 문자열

다양한 문장 부호 및 숫자 알파벳을 포함하는 문자

- yaml

  ```yaml
  String
  ```

- json

  ```json
  "String"
  ```

- yaml

  ```yaml
  - What's Yaml? 
  - It's for writing data structures in plain text. 
  - And? 
  - And what? That's not good enough for you? 
  - No, I mean, "And what about Yaml?" 
  - Oh, oh yeah. Uh.. Yaml for Ruby. 
  ```

- json

  ```json
  [ 
    "What's Yaml?", 
    "It's for writing data structures in plain text.", 
    "And?", 
    "And what? That's not good enough for you?", 
    "No, I mean, \"And what about Yaml?\"", 
    "Oh, oh yeah. Uh.. Yaml for Ruby." 
  ] 
  ```


### 문자열 주의사항

문자열에서 ":", "," 등을 사용할 때는 yaml 문법으로 인식될 수 있으므로 주의해야 한다

- yaml

  ```yaml
  the colon followed by space is an indicator: but is a string:right here 
  same for the pound sign: here we have it#in a string 
  the comma can, honestly, be used in most cases: [ but not in, inline collections ] 
  ```

- json

  ```json
  {
    "the colon followed by space is an indicator": "but is a string:right here",
    "same for the pound sign": "here we have it#in a string",
    "the comma can, honestly, be used in most cases": [
      "but not in",
      "inline collections"
    ]
  }
  ```


### 문자열 타입으로 강제하기

`!str` 메서드를 사용하여 문자열 타입으로 강제할 수 있다

- yaml

  ```yaml
  date string: 2001-08-01,
  number string: 192 
  
  ```

- json

  ```json
  {
    "date string": "2001-08-01",
    "number string": "192"
  }
  ```


### 작은 따옴표 문자열

작은 따옴표(')로 문자열을 묶어 안에서 특수문자를 안전하게 사용

- yaml

  ```yaml
  all my favorite symbols: '#:!/%.)' 
  a few i hate: '&(*' 
  why do i hate them?: 'it''s very hard to explain' 
  ```

- json

  ```json
  {
    "all my favorite symbols": "#:!/%.)",
    "a few i hate": "&(*",
    "why do i hate them?": "it's very hard to explain"
  }
  ```


### 큰 따옴표 문자열

큰 따옴표(")로 문자열을 묶어 안에서 아스키 코드와 유니코드 문자열을 표

- yaml

  ```yaml
  all my favorite symbols: '#:!/%.)' 
  a few i hate: '&(*' 
  why do i hate them?: 'it''s very hard to explain' 
  ```

- json

  ```json
  {
    "all my favorite symbols": "#:!/%.)",
    "a few i hate": "&(*",
    "why do i hate them?": "it's very hard to explain"
  }
  ```


### 다중 열 문자열

다중 열 문자열 사용 시 들여 쓰기를 통해 1칸 공백으로 해석

- yaml

  ```yaml
  i want a long string: "so i'm going to
    let it go on and on to other lines
    until i end it with a quote."
  ```

- json

  ```json
  {
    "i want a long string": "so i'm going to let it go on and on to other lines until i end it with a quote."
  }
  ```


### Null(널값)

"~" 물결표를 사용하여 `Null`을 표현

- yaml

  ```yaml
  date of next season: ~ 
  ```

- json

  ```json
  {
    "date of next season": null
  }
  ```


### Boolean(논리 자료형)

"true", "false"를 사용하여 `Boolean`을 표현

- yaml

  ```yaml
  Is Gus a Liar?: true
  Do I rely on Gus for Sustenance?: false
  ```

- json

  ```json
  Is Gus a Liar?: true
  Do I rely on Gus for Sustenance?: false
  ```


### Integers(정수형)

- yaml

  ```yaml
  zero: 0 
  simple: 12 
  one-thousand: 1,000 
  negative one-thousand: -1,000 
  ```

- json

  ```json
  {
    "zero": 0,
    "simple": 12,
    "one-thousand": 1000,
    "negative one-thousand": -1000
  }
  ```


### 객체 키로 정수 사용

- yaml

  ```yaml
  1: one 
  2: two 
  3: three 
  ```

- json

  ```json
  {
    "1": "one",
    "2": "two",
    "3": "three"
  }
  ```


### Floats(실수)

- yaml

  ```yaml
  a simple float: 2.00 
  larger float: 1,000.09 
  scientific notation: 1.00009e+3 
  ```

- json

  ```json
  {
    "a simple float": 2.0,
    "larger float": 1000.09,
    "scientific notation": 1000.09
  }
  ```


### Time(시간)

- yaml

  ```yaml
  iso8601: 2001-12-14t21:59:43.10-05:00 
  space seperated: 2001-12-14 21:59:43.10 -05:00 
  ```

- json

  ```json
  {
    "iso8601": "2001-12-15T02:59:43.100Z",
    "space seperated": "2001-12-15T02:59:43.100Z"
  }
  ```


### Date(날짜)

- yaml

  ```yaml
  1976-07-31
  ```

- json

  ```json
  "1976-07-31T00:00:00.000Z"
  ```


## 블록


### 단일 개행 문자열

파이프("|") 뒤에 오는 개행 문자는 \n으로 처리되어 단일 개행 문자열로 만들어 진다

- yaml

  ```yaml
  ---
  this: |
      Foo
      Bar
  ```

- json

  ```json
  {
    "this": "Foo\nBar\n"
  }
  ```


### "+" Keep 표시자

텍스트 블록에서 마지막 개행문자를 모두 유지

- yaml

  ```yaml
  normal: |
    extra new lines not kept
  
  preserving: |+
    extra new lines are kept
  
  
  dummy: value
  ```

- json

  ```json
  {
    "normal": "extra new lines not kept\n",
    "preserving": "extra new lines are kept\n\n\n",
    "dummy": "value"
  }
  ```


### "-" chomp 표시자

텍스트 블록에서 마지막 개행문자를 모두 제거

- yaml

  ```yaml
  chomp: |-
      This has no newline.
  
  
  
  keep: |+
      This has no newline.
  
  
  
  a: "b"
  ```

- json

  ```json
  {
    "chomp": "This has no newline.",
    "keep": "This has no newline.\n\n\n\n",
    "a": "b"
  }
  ```

