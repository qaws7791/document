## JSX

### 1개의 부모

- 항상 1개의 요소만 리턴해야 한다.

```react
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
```

- Fragment 단축 문법

```react
export default function App() {
  return (
    <>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </>
  );
}
```

### 변수 사용

```react
export default function App() {
  const name = "gildong";
  return (
    <View style={styles.container}>
      <Text style={styles.text}>My name is {name}</Text>
      <StatusBar style="auto" />
    </View>
  );
}
```

### if 조건문

```react
  <Text style={styles.text}>
    My name is
    {(() => {
      if (name === "Hanbit") return " Hanbit";
      else if (name === "gildong") return " gildong";
      else return " Blank";
    })()}
  </Text>
```

### 삼항 연산자

```react
<Text style={styles.text}>
        My name is 
    	{name === "gildong" ? "Hong gildong" : "react native"}
      </Text>
```

### AND 연산자(&&)

```react
<View style={styles.container}>
      {name === "gildong" && (
        <Text style={styles.text}>My name is gildong</Text>
      )}
      {name !== "gildong" && (
        <Text style={styles.text}>My name is not gildong</Text>
      )}
      <StatusBar style="auto" />
    </View>
```

### 주석

- 주석은 `{/* 주석 */}`

```react
export default function App() {
  return (
    {/* 주석 */}
    <View style={styles.container}>
	...
    </View>
  );
}
```

### 인라인 스타일링

- 객체 타입으로 넘긴다 `style={{스타일명:스타일값}}`

```react
export default function App() {
  const name = "gildong";
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
    </View>
  );
}
```

### 컴포넌트

- https://reactnative.dev/docs/components-and-apis

### 버튼

```react
import React from "react";
import Button from "react-native";

const App = () => {
  return (
      <Button title="Button" onPress={() => alert("Click !!!")} />
  );
};
```

## props

- 부모로 전달받은 값
-  변경 불가

### props 기본 사용법

- 부모 컴포넌트에서 전달

```react
...
<MyButton title="Button" />
...
```

- 자식 컴포넌트에서 받기

```react
const MyButton = (props) => {
  console.log(props);
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "#3498db",
        padding: 16,
        margin: 10,
        borderRadius: 8,
      }}
      onPress={() => alert("Click !!!")}
    >
      <Text
        style={{
          fontSize: 24,
          color: "white",
        }}
      >
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};
```

### 태그 사이의 값인 childern으로 받기

- `{props.children || props.title}`: children이 있으면 우선으로 사용

```react
<MyButton title="Button">Children Props</MyButton>
```

```react
const MyButton = (props) => {
  return (
      <Text
        style={{
          fontSize: 24,
          color: "white",
        }}
      >
        {props.children || props.title}
      </Text>
  );
};
```

### props 기본값 설정

```react
const MyButton = (props) => {
...
  )};

MyButton.defaultProps = {
  title: "Button",
};
export default MyButton;
```

### propTypes로 props 타입 체크

- https://reactjs.org/docs/typechecking-with-proptypes.html
- `npm install prop-types`
- props 타입 체크

```react
import PropTypes from "prop-types";
...
MyButton.propTypes = {
  title: PropTypes.number,
};
```

```
Warning: Failed prop type: Invalid prop `title` of type `string` supplied to `MyButton`, expected `number`.
```

### propTypes로 필수 여부 지정

- `isRequired`를 뒤에 붙인다.

```react
MyButton.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
```

```
Warning: Failed prop type: The prop `name` is marked as required in `MyButton`, but its value is `undefined`.
```

## state

- 컴포넌트 내부의 값으로 생성, 변경 가능
- 상태 변화 시 -> 리렌더링

### usestate로 상태 관리

```react
const [state, setState] = useState(initialState);
```

```react
import React, { useState } from "react";
import { View, Text } from "react-native";
import MyButton from "./MyButton";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <View style={{ alignItems: "center" }}>
      <Text style={{ fontSize: 30, margin: 10 }}>{count}</Text>
      <MyButton title="+1" onPress={() => setCount(count + 1)} />
      <MyButton title="-1" onPress={() => setCount(count - 1)} />
    </View>
  );
};

export default Counter;

```

### usestate에 함수를 인자로 전달하기

```react
<Button
        title="+"
        onPress={() => {
          setCount((prevCount) => prevCount + 1);
          setCount((prevCount) => prevCount + 1);
          console.log(`count:${count}`);
        }}
      />
```



## event

### touch event

```react
import React from "react";
import { TouchableOpacity, Text } from "react-native";

const EventButton = () => {
  const _onPressIn = () => console.log("Press In \n");
  const _onPressOut = () => console.log("Press Out \n");
  const _onPress = () => console.log("Press \n");
  const _onLongPress = () => console.log("Long Press \n");
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "#f1c40f",
        padding: 16,
        marign: 10,
        borderRadius: 8,
      }}
      onPressIn={_onPressIn}
      onLongPress={_onLongPress}
      onPressOut={_onPressOut}
      onPress={_onPress}
      delayLongPress={3000}
    >
      <Text style={{ color: "white", fontSize: 24 }}>Press</Text>
    </TouchableOpacity>
  );
};

export default EventButton;
```

### onchange event

```react
import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";

const EventInput = () => {
  const [text, setText] = useState("");
  const _onChange = (event) => setText(event.nativeEvent.text);
  const _onChange = text => setText(event.nativeEvent.text);//단축형
  return (
    <View>
      <Text style={{ margin: 10, fontSize: 30 }}>text: {text}</Text>
      <TextInput
        style={{ borderWidth: 1, padding: 10, fontSize: 20 }}
        placeholder="Enter a text..."
        onChange={_onChange}
      />
    </View>
  );
};

export default EventInput;
```

- `event.nativeEvent`의 구조와 로그

```js
"nativeEvent": {
"eventCount": ...,
"target": ...,
"text": ...,
}
```

```
 LOG  {"eventCount": 50, "target": 1889, "text": "hello31"}
 LOG  {"eventCount": 52, "target": 1889, "text": "hello311"}
 LOG  {"eventCount": 54, "target": 1889, "text": "hello3111"}
```

### Pressable

- 사용자의 모바일 사용성을 고려한 터치 설계

![image-20221223001645835](react-native.assets/image-20221223001645835.png)

# jsx 스타일링

## 인라인 스타일링

```react
<View
	style={{
		flex:1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	}}
>
```

## 클래스 스타일링

```react
<View style={styles.container}>
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
```

- 여러 스타일 한 번에 적용 -> 배열

```react
<View style={[styles.container, styles.view]}>
```

## 인라인 + 클래스

```react
<View style={[styles.container, {color: 'red'}]}>
```

## 외부 파일 스타일 사용

- 외부파일에서 가져와 사용

```react
import { StyleSheet } from "react-native";

export const viewStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
```

```react
import { viewStyles } from "./styles";
const App = () => {
  return (
    <View style={viewStyles.container}>
      <Text>React Native Style</Text>
    </View>
  );
};
```

## Platform으로 ios와 android 스타일 각각 적용하기

- https://reactnative.dev/docs/platform

```react
import React from "react";
import { StyleSheet, View, Platform } from "react-native";
const styles = StyleSheet.create({
  shadow: {
    backgroundColor: "#fff",
    width: 200,
    height: 200,
    ...Platform.select({
      ios: { //ios
        shadowColor: "#000",
        shadowOffset: {
          width: 10,
          height: 10,
        },
        shadowOpacity: 0.5,
        shadowRadius: 10,
      },
      android: { //android
        elevation: 20,
      },
    }),
  },
});

```

## styled-components

- `npm install styled-components`

### styled-components와 props 사용하기

```react
import styled from "styled-components/native";

const ButtonContainer = styled.TouchableOpacity`
  background-color: ${(props) =>
    props.title === "Hanbit" ? "#3498db" : "#9b59b6"};
  border-radius: 15px;
  padding: 15px 40px;
  margin: 10px 0px;
  margin: 10px 0px;
  justify-content: center;
`;
const Button = (props) => {
  return (
    <ButtonContainer title={props.title}>
    </ButtonContainer>
  );
};
```

### styled-components와 attrs 사용하기

- props로 받은 값 - > attrs로





## useEffect

- `useEffect(()=>{조건시 실행 함수},[조건배열])`
- useEffect의 실행 함수로 비동기 함수를 전달하면 안된다
  -> 실행함수 내부에 비동기함수를 정의하고 사용

### 값이 바뀔 떄 마다 실행

```
useEffect(() => {
    console.log(`name: ${name}, email: ${email}\n`);
  }, [email]);
```

### 마운트될 때, 언마운트될 때 실행

- 빈배열 -> 마운트 할 때
- return 함수 -> 언마운트 할 때

```
useEffect(() => {
    console.log("Form Component Mount");
    return () => console.log("Form Component Unmount");
  }, []);
```



## useRef

- 컴포넌트의 ref로 지정시 변수의 .current 프로퍼티에 해당 값을 담는다
- useRef의 내용이 변경 되어도 다시 렌더링 되지 않는다

```react
const refName = useRef(null);
...
<StyledTextInput
        value={name}
        ref={refName}
        returnKeyType="next"
        onSubmitEditing={() => refEmail.current.focus()}
        onChangeText={(text) => setName(text)}
        placeholder="name"
      />
...
```



## useMemo

- `useMemo(() => {생성함수}, [의존성 값 배열])`
- 의존성값 배열이 변경되었을 때에만 메모제이션된 값을 함수를 통해 재계산
- 생성함수는 렌더링 중에도 실행된다

```react
//useMemo 사용 전
const [ length, setLength] = useState('')
const _onPress = () => {
    setLength(getLength(text));
    ++idx;
    if (idx < list.length) setText(list[idx]);
  };
//항상 getLength() 실행
```

```react
//useMemo 사용 후
const _onPress = () => {
    ++idx;
    if (idx < list.length) setText(list[idx]);
  };
  const length = useMemo(() => getLength(text), [text]);
//text 변화 발생 시 >- getLength() 실행 -> length 값 변화
```

# Context

- 컴포넌트 트리 전체에 데이터를 제공
- 전역적인 데이터를 공유하기 위한 방법
- ex. 현재 로그인 유저, 테마, 선호하는 언어 등
- 실제 사용되는 곳은 최하위 컴포넌트인데 props로 계속 내려 받는 것은 비효율적이기 때문

- ```react
  const MyContext = React.createContext(defaultValue);
  ```



### `Context.Provider`

- context를 구독하는 컴포넌트에게 context의 변화를 알림

```
<MyContext.Provider value={/* 어떤 값 */}>
```



### `Context.Consumer`

- context 변화를 구독하는 컴포넌트.
- 상위 컴포넌트 중 가장 가까운 `Provider`컴포넌트가 전달하는 데이터를 사용
- `Context.Consumer`의 자식은 함수로서
  context의 현재값을 받아 -> React 노드를 반환

```react
<MyContext.Consumer>
  {value => /* context 값을 이용한 렌더링 */}
</MyContext.Consumer>
```

