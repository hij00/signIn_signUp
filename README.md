# 로그인 / 회원가입

**React Hook** 중 하나인 [**useForm**](#useform)을 사용해 로그인 / 회원가입 구현<br/>
[사이트 보러가기](https://hij00.github.io/signIn_signUp/)

---

<!-- -----------------헤더---------------------- -->

## 1. Header

- LOGO를 누르면 첫 화면으로 돌아감
  ![signIN_signUP](https://user-images.githubusercontent.com/106130501/206829914-a2cb5b20-cf8d-438d-96de-bb59bb3ae19d.PNG)
- 우측 상단의 로그인(로그아웃상태)을 누르면 [**로그인 창**](#22-sign-in로그인)으로 이동
  ![로그인](https://user-images.githubusercontent.com/106130501/206839556-3e9c8ba0-cf20-404c-8dc6-f4499c99cee2.png)
- 로그아웃(로그인 상태)을 누르면 간편하게 로그아웃 가능
  ![로그아웃](https://user-images.githubusercontent.com/106130501/206839535-1df6f39c-9883-4225-9803-7773f32b039b.PNG)

---

<!-- -----------------메인---------------------- -->

## 2. Main Page

- 화면을 반으로 나눠 회원가입과 로그인을 보기 쉽게 디자인함
- [**로그인**](#22-sign-in로그인)
  ![화면1](https://user-images.githubusercontent.com/106130501/206830674-3fd8eb07-6b05-4ea6-80a7-a526a3a37db8.PNG)
- [**회원가입**](#21-sign-up회원가입)
  ![화면2](https://user-images.githubusercontent.com/106130501/206837752-da1cc139-fa28-4dcf-a7b9-bba3c084e163.PNG)

<!-- -----------------회원가입---------------------- -->

### **2.1. Sign Up(회원가입)**

[**아이디**](#아이디-중복-확인), [**비밀번호**](#비밀번호-일치-확인), 비밀번호 확인

- ~~정보 저장 안되는~~ 임시 회원가입
- [**빈 배열에 회원가입 정보를 전송**](#3-arrpush)해서 정보가 있는 것 처럼 생성
- 배열 앞에 export를 붙이고 로그인 파일에서 배열 import

#### 1) 배열 만들기

```javascript
export let userDb = [];
```

#### 2) 유저 정보를 넣을 객체 생성

```javascript
const userObj = {
  id: Date.now(),
  user: username,
  password: password,
  passwordcheck: pwCheck,
};
```

#### 3) arr.push()

~~비밀번호가 일치 && 새 아이디이면~~ 배열에 객체 넣기

```javascript
if (password === pwCheck && checkUserDb.length < 1) {
  userDb.push(userObj);
  handleClick();
}
```

#### 4) 아이디 중복 확인 / 비밀번호 일치 확인

#### 아이디 중복 확인

[**setError**](#seterror)를 사용해 조건이 맞다면(아이디가 중복이라면) message를 띄움

```javascript
if (checkUserDb.length >= 1) {
  setError("usernameResult", {
    message: "이미 가입된 아이디입니다.",
  });
}
```

#### 비밀번호 일치 확인

[**setError**](#seterror)를 사용해 조건이 맞다면(비밀번호가 일치하지 않다면) message를 띄움

```javascript
if (password !== pwCheck) {
  setError("passwordResult", {
    message: "비밀번호가 일치하지 않습니다.",
  });
}
```

<!-- -----------------로그인---------------------- -->

### **2.2. Sign In(로그인)**

아이디, 비밀번호

- 회원가입 정보를 입력해서 로그인 ~~(userDb를 import함)~~
- [**로그인에 성공하면 페이지 이동**](#navigate),

#### 1) arr.filter()

arr.filter()를 사용해 userDb의 정보와 입력한 아이디가 일치하는지 비교 => checkUserDb

```javascript
const checkUserDb = userDb.filter((a) => a.user === username);
```

#### 2) 아이디 / 비밀번호 확인

```javascript
if (checkUserDb.length < 1) {
  setError("usernameResult", {
    message: "존재하지 않는 아이디입니다.",
  });
} else {
  const { password: cpassword } = checkUserDb[0];
  if (password !== cpassword) {
    setError("passwordResult", {
      message: "비밀번호가 틀렸습니다.",
    });
  } else {
    navigate("/", { state: checkUserDb });
  }
}
```

#### 아이디

checkUserDb가 1보다 작으면 정보가 없음~~(정보 전달이 안됨)~~  
=> [**setError**](#seterror)로 정보가 없다는 에러메세지를 전달

```javascript
if (checkUserDb.length < 1) {
  setError("usernameResult", {
    message: "존재하지 않는 아이디입니다.",
  });
}
```

#### 비밀번호

checkUserDb의 첫 번째 객체 비밀번호와 로그인에 입력한 비밀번호 비교  
=> 다르면 [**setError**](#seterror)로 정보가 틀렸다는 에러메세지 전달

```javascript
else {
      const { password: cpassword } = checkUserDb[0];
      if (password !== cpassword) {
        setError("passwordResult", {
          message: "비밀번호가 틀렸습니다.",
        });
      } }
```

#### navigate

#### 3)

#### 4) userDb.filter()

---

<!-- -----------------Hook_useForm()---------------------- -->

# useForm()

##### mode

```javascript
useForm({ mode: "onChange" });
```

##### register

##### handleSubmit

##### getValuses

##### setError

##### clearErrors

##### formState

---

# useNavigate()
