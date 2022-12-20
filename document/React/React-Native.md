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

