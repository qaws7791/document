# Design Pattern

| **Creational**            | Based on the concept of creating an object                   |
| ------------------------- | ------------------------------------------------------------ |
| **Class**                 |                                                              |
| *Factory method*          | Makes an instance of several derived classes based on interfaced data or events |
| **Object**                |                                                              |
| *Abstract Factory*        | Creates an instance of several families of classes without detailing concrete classes |
| *Builder*                 | Separates object construction from its representation; always creates the same type of object |
| *Prototype*               | A fully initialized instance used for copying or cloning     |
| *Singleton*               | A class with only a single instance with global access points |
|                           |                                                              |
| **Structural**            | Based on the idea of building blocks of objects              |
| **Class**                 |                                                              |
| *Adapter*                 | Matches interfaces of different classes so that classes can work together despite incompatible interfaces |
| **Object**                |                                                              |
| *Bridge*                  | Separates an object’s interface from its implementation so that the two can vary independently |
| *Composite*               | A structure of simple and composite objects that makes the total object more than just the sum of its parts |
| *Decorator*               | Dynamically adds alternate processing to objects             |
| *Facade*                  | A single class that hides the complexity of an entire subsystem |
| *Flyweight*               | A fine-grained instance used for efficient sharing of information that is contained elsewhere |
| *Proxy*                   | A placeholder object representing the true object            |
|                           |                                                              |
| **Behavioral**            | Based on the way objects play and work together              |
| **Class**                 |                                                              |
| *Interpreter*             | A way to include language elements in an application to match the grammar of the intended language |
| *Template method*         | Creates the shell of an algorithm in a method, then defers the exact steps to a subclass |
| **Object**                |                                                              |
| *Chain of responsibility* | A way of passing a request between a chain of objects to find the object that can handle the request |
| *Command*                 | A way to separate the execution of a command from its invoker |
| *Iterator*                | Sequentially accesses the elements of a collection without knowing the inner workings of the collection |
| *Mediator*                | Defines simplified communication between classes to prevent a group of classes from referring explicitly to each other |
| *Memento*                 | Captures an object’s internal state to be able to restore it later |
| *Observer*                | A way of notifying change to a number of classes to ensure consistency between the classes |
| *State*                   | Alters an object’s behavior when its state changes           |
| *Strategy*                | Encapsulates an algorithm inside a class, separating the selection from the implementation |
| *Visitor*                 | Adds a new operation to a class without changing the class   |


# 1. 생성 패턴


## 생성자(Constructor) 패턴

객체를 생성하는 메커니즘

생성자를 사용하여 객체를 클래스의 인스턴스로 생성


### 객체 생성하기

객체 생성하기

```typescript
const obj = {};
const obj = Object.create(Object.prototype);
const obj = new Object();
```

값 할당하기

```typescript
obj.key = 'value';
obj['key'] = 'value';
Object.defineProperty(obj, 'key', {
 value: 'value'
 writable: true
})
```

클래스로 객체 생성하기

```typescript
class Person {
 constructor(name,age) {
  this.name = name;
  this.age = age; 
 }
 
 toString() {
  return `${this.name} is ${this.age} years old`
 }
}
const john = new Person('John',  20);
const kim = new Person('Kim',  24);

console.log(john.toString());
console.log(john.toString());
```

toString을 프로토타입의 메서드로 정의할 수도 있다

```typescript
Person.prototype.toString = function() {
 return `${this.name} is ${this.age} years old`
}
```


## 모듈(Module) 패턴


### 객체 리터럴 패턴

```javascript
const mathModule = {
 pi: 3.14,
 add(x,y) {
  return x + y
 }
    calculateCicleArea(radius) {
        return (radius**2) * this.pi
    }
}

console.log(mathModule.add(4,5)) // 9
```


### 모듈 패턴

공개 API만 외부로 노출하고, 클로저를 통해 다른 항목은 비공개로 유지

즉시 호출 함수 표현식(IIFE)을 사용

`export`키워드를 사용하여 명시적으로 내보낸 값만 액세스 가능

```javascript
//counterModule
let counter = 0;

export function incrementCounter() {
 return counter++;
}

export function resetCounter() {
 counter = 0;
}
```

```javascript
//usage
import {incrementCounter,resetCounter} from './counterModule';
console.log(incrementCounter()) // 1, 2, ...
```


**WeakMap 사용하는  패턴**

```typescript
// cart.ts

export interface Item {
    name: string;
    quantity: number;
}

export class ShoppingCart {
    private carts: WeakMap<object, Map<string, number>>;

    constructor() {
        this.carts = new WeakMap();
    }

    private getCart(user: object): Map<string, number> {
        if (!this.carts.has(user)) {
            this.carts.set(user, new Map());
        }
        return this.carts.get(user)!;
    }

    addItem(user: object, itemName: string, quantity: number): void {
        const cart = this.getCart(user);
        if (cart.has(itemName)) {
            cart.set(itemName, cart.get(itemName)! + quantity);
        } else {
            cart.set(itemName, quantity);
        }
    }

    removeItem(user: object, itemName: string, quantity: number): void {
        const cart = this.getCart(user);
        if (!cart.has(itemName)) return;

        const currentQuantity = cart.get(itemName)!;
        if (currentQuantity <= quantity) {
            cart.delete(itemName);
        } else {
            cart.set(itemName, currentQuantity - quantity);
        }
    }

    getItems(user: object): Item[] {
        const cart = this.getCart(user);
        const items: Item[] = [];
        cart.forEach((quantity, name) => {
            items.push({ name, quantity });
        });
        return items;
    }

    clearCart(user: object): void {
        this.carts.delete(user);
    }
}

```


### **노출식 모듈 패턴(revealing module)**

 공개할 부분만 명시적으로 노출하고 나머지는 모두 숨김

`get`, `set`메서드와 같은 공개 메서드를 사용하여 private 변수를 공개하고 사용

공개적으로 액세스할 수 있는 함수와 기능을 판단하기 쉽다

비공개 멤버를 동적으로 변경하기 어려움

```typescript
// cart.ts

export interface Item {
    name: string;
    quantity: number;
}

const ShoppingCart = (() => {
    const carts: WeakMap<object, Map<string, number>> = new WeakMap();

 // ... 위와 동일

    // ✅공개 API 노출하기
    return {
        addItem,
        removeItem,
        getItems,
        clearCart
    };
})();

export default ShoppingCart;

```


## 싱글톤(Singleton) 패턴

클래스의 인스턴스를 하나로 제한.

시스템 전체에 하나의 개체만 존재해야 하는 경우 사용

일반적인 용도 중 하나는 전역 범위를 데이터를 다루기 위한 용도

대규모 모듈에서는 싱글톤 클래스를 인식하기 어려워 일반 클래스와 혼동될 수 있다

의존성을 관리하기 어려울 수 있다

생성자가 `private`되기 때문에 생성 시에 인자를 전달하기 어렵다

테스트가 어렵다

```typescript
class Singleton {
    private static instance: Singleton;

    // private constructor to prevent instantiation from outside
    private constructor() {
        // Initialization code here
    }

    // static method to get the single instance of the class
    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }

    public someMethod(): void {
        console.log("Singleton method called!");
    }
}

// Usage
const singleton1 = Singleton.getInstance();
const singleton2 = Singleton.getInstance();

singleton1.someMethod();

console.log(singleton1 === singleton2); // true

```


## 프로토타입(Prototype) 패턴

기존 객체의 템플릿을 기반으로 복사하여 객체를 생성하는 패턴

프로토타입 상속 기반

```typescript
interface Prototype {
    clone(): Prototype;
}

class ConcretePrototype implements Prototype {
    public field: string;

    constructor(field: string) {
        this.field = field;
    }

    public clone(): Prototype {
        return new ConcretePrototype(this.field);
    }

    public toString(): string {
        return `ConcretePrototype with field: ${this.field}`;
    }
}

const original = new ConcretePrototype("original");
const clone = original.clone();
```


## 팩토리(Factory) 패턴

생성자를 명시적으로 사용하지 않고 객체 생성을 위한 인터페이스(ex. `create`)를 제공

사용하기:

- 개체 또는 구성 요소 설정에 복잡성이 높은 경우
- 다양한 객체 인스턴스 생성을 쉽게 다루기 위해
- 공통적인 속성이 많은 개체나 구성 요소를 다룰 때

단점:

- 의도치 않게 필요 이상의 오버헤드가 발생할 수 있음
- 객체 생성 과정이 추상화되므로 테스트가 복잡해질 수 있음

```typescript
// product.ts
export interface Product {
    getName(): string;
    getPrice(): number;
}

// book.ts
import { Product } from './product';

export class Book implements Product {
    private name: string;
    private price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    getName(): string {
        return this.name;
    }

    getPrice(): number {
        return this.price;
    }
}

// electronics.ts
import { Product } from './product';

export class Electronics implements Product {
    private name: string;
    private price: number;

 ...
}

// clothing.ts
import { Product } from './product';

export class Clothing implements Product {
    private name: string;
    private price: number;

    ...
}

// productFactory.ts
import { Product } from './product';
import { Book } from './book';
import { Electronics } from './electronics';
import { Clothing } from './clothing';

export class ProductFactory {
    static createProduct(type: string, name: string, price: number): Product {
        switch (type) {
            case 'book':
                return new Book(name, price);
            case 'electronics':
                return new Electronics(name, price);
            case 'clothing':
                return new Clothing(name, price);
            default:
                throw new Error('Invalid product type');
        }
    }
}

const book: Product = ProductFactory.createProduct('book', 'TypeScript Handbook', 29.99);
const laptop: Product = ProductFactory.createProduct('electronics', 'Laptop', 999.99);
const shirt: Product = ProductFactory.createProduct('clothing', 'T-Shirt', 19.99);
```


### 추상 팩토리 패턴

팩토리 패턴의 확장.

|            | 추상 팩토리                                                  | 팩토리                                                      |
| ---------- | ------------------------------------------------------------ | ----------------------------------------------------------- |
| 생성 범위  | 관련 제품 객체의 집합을 생성                                 | 단일 제품 객체 생성                                         |
| 인터페이스 | 여러 팩토리 메서드를 통한 생성                               | 단일 팩토리 메서드를 통한 생성                              |
| 확장성     | 새로운 제품을 추가하기 쉽게 설계되어, 새로운 팩토리를 추가하면 됨 | 새로운 제품 추가를 위해 기존 팩토리에 변경이 필요할 수 있음 |

```typescript
/// 1. 추상 제품 인터페이스 정의
// product.ts
export interface DigitalProduct {
    getName(): string;
    getDownloadLink(): string;
}

export interface PhysicalProduct {
    getName(): string;
    getShippingWeight(): number;
}

/// 2. 구체적인 제품 클래스 구현
// ebook.ts
import { DigitalProduct } from './product';

export class EBook implements DigitalProduct {
    constructor(private name: string, private downloadLink: string) {}

    getName(): string {
        return this.name;
    }

    getDownloadLink(): string {
        return this.downloadLink;
    }
}

// laptop.ts
import { PhysicalProduct } from './product';

export class Laptop implements PhysicalProduct {
    constructor(private name: string, private shippingWeight: number) {}

    getName(): string {
        return this.name;
    }

    getShippingWeight(): number {
        return this.shippingWeight;
    }
}

/// 3. 추상 팩토리 인터페이스 정의
// productFactory.ts
import { DigitalProduct, PhysicalProduct } from './product';

export interface ProductFactory {
    createDigitalProduct(name: string, downloadLink: string): DigitalProduct;
    createPhysicalProduct(name: string, shippingWeight: number): PhysicalProduct;
}

/// 4. 구체적인 팩토리 클래스 구현
// ecommerceProductFactory.ts
import { ProductFactory } from './productFactory';
import { DigitalProduct, PhysicalProduct } from './product';
import { EBook } from './ebook';
import { Laptop } from './laptop';

export class ECommerceProductFactory implements ProductFactory {
    createDigitalProduct(name: string, downloadLink: string): DigitalProduct {
        return new EBook(name, downloadLink);
    }

    createPhysicalProduct(name: string, shippingWeight: number): PhysicalProduct {
        return new Laptop(name, shippingWeight);
    }
}

// app.ts
import { ECommerceProductFactory } from './ecommerceProductFactory';
import { DigitalProduct, PhysicalProduct } from './product';

const factory = new ECommerceProductFactory();

const ebook: DigitalProduct = factory.createDigitalProduct('TypeScript Handbook', 'https://download.example.com/ts-handbook');
const laptop: PhysicalProduct = factory.createPhysicalProduct('Laptop', 2.5);
```


## 빌더(Builder) 패턴

- 객체를 단계별로 구성
- 생성 단계를 단순하고 유연하게 할 수 있다
- 메서드가 하나씩 책임만 가지게 되므로 코드를 쉽게 분리할 수 있다

```typescript
/// 1. Product 클래스 정의
class Product {
    public name: string;
    public price: number;
    public description?: string;
    public category?: string;
    public stock?: number;
    
    constructor(
        name: string,
        price: number,
        description?: string,
        category?: string,
        stock?: number
    ) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.category = category;
        this.stock = stock;
    }
}

/// 2. ProductBuilder 클래스 정의
class ProductBuilder {
    private name: string;
    private price: number;
    private description?: string;
    private category?: string;
    private stock?: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    setDescription(description: string): ProductBuilder {
        this.description = description;
        return this;
    }

    setCategory(category: string): ProductBuilder {
        this.category = category;
        return this;
    }

    setStock(stock: number): ProductBuilder {
        this.stock = stock;
        return this;
    }

    build(): Product {
        return new Product(
            this.name,
            this.price,
            this.description,
            this.category,
            this.stock
        );
    }
}

/// 3. 빌더 패턴 사용법
const productBuilder = new ProductBuilder('Laptop', 1500);
const product = productBuilder
    .setDescription('High-performance laptop')
    .setCategory('Electronics')
    .setStock(50)
    .build();

console.log(product);

```


# 2. 구조 패턴


## 어댑터(Adapter) 패턴

- 호환되지 않는 인터페이스 간의 협업이 가능하도록 하는 구조
- 레거시 코드(클래스), 타사의 코드(클래스)와의 나의 코드의 통합을 위한 중간 클래스의 역할

ex. react-redux와 같은 라이브 러리

```typescript
/// 1. 공통 인터페이스 정의
interface PaymentGateway {
    processPayment(amount: number): void;
}

/// 2. PayPal 클래스 및 어댑터 정의
class PayPal {
    sendPayment(amount: number): void {
        console.log(`Processing payment of $${amount} through PayPal.`);
    }
}

class PayPalAdapter implements PaymentGateway {
    private payPal: PayPal;

    constructor(payPal: PayPal) {
        this.payPal = payPal;
    }

    processPayment(amount: number): void {
        this.payPal.sendPayment(amount);
    }
}

/// 3. Stripe 클래스 및 어댑터 정의
class Stripe {
    makePayment(amount: number): void {
        console.log(`Processing payment of $${amount} through Stripe.`);
    }
}

class StripeAdapter implements PaymentGateway {
    private stripe: Stripe;

    constructor(stripe: Stripe) {
        this.stripe = stripe;
    }

    processPayment(amount: number): void {
        this.stripe.makePayment(amount);
    }
}

/// 4. 어댑터 패턴 사용법
const paypal = new PayPalAdapter(new PayPal());
paypal.processPayment(100);  // Output: Processing payment of $100 through PayPal.

const stripe = new StripeAdapter(new Stripe());
stripe.processPayment(200);  // Output: Processing payment of $200 through Stripe.

```


## 브릿지(Bridge) 패턴

- 독립적인 두 개의 계층으로 분리하여 개발이 가능하도록 하는 구조
- 추상화와 구현부를 분리하여 결합도를 낮추고 확장성을 높일 수 있다

```typescript
/// 1. 결제 게이트 웨이 인터페이스
// Implementor
interface PaymentGateway {
    processPayment(amount: number): void;
}

/// 2. 실제 결제 게이트 웨이 구현
// Concrete Implementors
class PayPalGateway implements PaymentGateway {
    processPayment(amount: number): void {
        console.log(`Processing payment of $${amount} through PayPal.`);
    }
}

class StripeGateway implements PaymentGateway {
    processPayment(amount: number): void {
        console.log(`Processing payment of $${amount} through Stripe.`);
    }
}

/// 3. 결제 프로세스 추상화
// Abstraction
abstract class Payment {
    protected gateway: PaymentGateway;

    constructor(gateway: PaymentGateway) {
        this.gateway = gateway;
    }

    abstract makePayment(amount: number): void;
}

/// 4. 결제 프로세스 구현
// Refined Abstraction
class OnlinePayment extends Payment {
    makePayment(amount: number): void {
        console.log("Initiating online payment...");
        this.gateway.processPayment(amount);
    }
}

class InStorePayment extends Payment {
    makePayment(amount: number): void {
        console.log("Initiating in-store payment...");
        this.gateway.processPayment(amount);
    }
}

/// 5. 사용법
const onlinePayPalPayment = new OnlinePayment(new PayPalGateway());
onlinePayPalPayment.makePayment(100); // Output: Initiating online payment... Processing payment of $100 through PayPal.

const inStoreStripePayment = new InStorePayment(new StripeGateway());
inStoreStripePayment.makePayment(200); // Output: Initiating in-store payment... Processing payment of $200 through Stripe.

```


## 컴포지드(Composite) 패턴

- 트리 구죄: 객체를 트리 구조로 구성
- 재귀적 구조: 복합 객체가 복합 객체 또는 개별 객체를 포함
- 동일한 인터페이스: 각 컴포넌트(단일 객체 또는 복합 객체)는 동일한 인터페이스로 처리
- 부분과 전체의 계층 구조를 표현

```typescript
/// 컴포넌트(공통 인터페이스) 정의
abstract class CategoryComponent {
    abstract getName(): string;
    abstract display(indent: string): void;
}

// 실제 카테고리 구현
class Category extends CategoryComponent {
    private name: string;

    constructor(name: string) {
        super();
        this.name = name;
    }

    getName(): string {
        return this.name;
    }

    display(indent: string): void {
        console.log(indent + this.name);
    }
}

// 상위 카테고리 구현
class CategoryGroup extends CategoryComponent {
    private name: string;
    private categories: CategoryComponent[] = [];

    constructor(name: string) {
        super();
        this.name = name;
    }

    getName(): string {
        return this.name;
    }

    add(category: CategoryComponent): void {
        this.categories.push(category);
    }

    remove(category: CategoryComponent): void {
        const index = this.categories.indexOf(category);
        if (index !== -1) {
            this.categories.splice(index, 1);
        }
    }

    display(indent: string): void {
        console.log(indent + this.name);
        for (const category of this.categories) {
            category.display(indent + "  ");
        }
    }
}

// Usage
const electronics = new CategoryGroup("Electronics");
const computers = new Category("Computers");
const smartphones = new Category("Smartphones");

electronics.add(computers);
electronics.add(smartphones);

const homeAppliances = new CategoryGroup("Home Appliances");
const kitchen = new Category("Kitchen");
const laundry = new Category("Laundry");

homeAppliances.add(kitchen);
homeAppliances.add(laundry);

const allCategories = new CategoryGroup("All Categories");
allCategories.add(electronics);
allCategories.add(homeAppliances);

allCategories.display("- ");

```


## 퍼사드(Facade) 패턴

복잡한 시스템의 여러 인터페이스를 단순한 하나의 인터페이스로 통합하여  사용자가 시스템을 쉽게 사용할 수 있도록 한다.

내부 복잡성을 숨기고 간단한 인터페이스를 제공

자바스크립트에서 대표적인 `jQuery 라이브러리`

```typescript
/// 1. 서브 시스템 클래스 구현
// OrderProcessing.ts
export class OrderProcessing {
    public processOrder(orderId: number): void {
        console.log(`Processing order #${orderId}`);
    }
}

// Payment.ts
export class Payment {
    public makePayment(amount: number): void {
        console.log(`Processing payment of $${amount}`);
    }
}

// Shipping.ts
export class Shipping {
    public shipOrder(orderId: number): void {
        console.log(`Shipping order #${orderId}`);
    }
}

/// 2. Facade 클래스 구현
// ECommerceFacade.ts
import { OrderProcessing } from './OrderProcessing';
import { Payment } from './Payment';
import { Shipping } from './Shipping';

export class ECommerceFacade {
    private orderProcessing: OrderProcessing;
    private payment: Payment;
    private shipping: Shipping;

    constructor() {
        this.orderProcessing = new OrderProcessing();
        this.payment = new Payment();
        this.shipping = new Shipping();
    }

    public placeOrder(orderId: number, amount: number): void {
        this.orderProcessing.processOrder(orderId);
        this.payment.makePayment(amount);
        this.shipping.shipOrder(orderId);
        console.log(`Order #${orderId} has been placed successfully.`);
    }
}

/// 3. 사용
// app.ts
import { ECommerceFacade } from './ECommerceFacade';

const ecommerce = new ECommerceFacade();
ecommerce.placeOrder(123, 250.0);

```


## 데코레이터(Decorator) 패턴

기존 클래스에 동적으로 새로운 동작을 추가

여러 데코레이터를 사용하여 복잡한 기능을 구현할 수도 있다

장점:

- 유연하게 동작을 확장하고 값을 변경할 수 있다
- 상속이나 하위 클래스를 사용하지 않아도 된다
- 재사용과 조합이 쉽다

단점:

- 복잡성이 증가하여 데코레이터에 익숙하지 않은 경우 코드를 파악하기 어려워질 수 있다

```typescript
class Product {
  constructor(public name: string, public price: number) {}

  getDetails(): string {
    return `${this.name} costs $${this.price}`;
  }
}

// LoggerDecorator.ts
function LoggerDecorator<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  return class extends constructor {
    constructor(...args: any[]) {
      super(...args);
      console.log(`Product created: ${args[0]} costs $${args[1]}`);
    }
  };
}



// DecoratedProduct.ts
@LoggerDecorator
class DecoratedProduct extends Product {
  getDetails(): string {
    return super.getDetails();
  }
}

// app.ts
const product = new DecoratedProduct("Laptop", 1000);
console.log(product.getDetails()); // Output: Laptop costs $1000

```


## 플라이웨이트(Flyweight) 패턴

객체를 공유하여 메모리 사용을 최적화

많은 수의 유사한 객체를 만들 때 성능 향상을 위해 사용

2가지 상태

- 내부 상태: 객체의 고유한 상태로 외부에서 변경할 수 없는 불변
- 외부 상태: 객체의 외부에서 변경할 수 있는 상태로 공유되지 않음

4가지 요소

- **Flyweight**: 공유될 객체의 인터페이스 정의
- **Concrete Flyweight**: Flyweight 인터페이스를 구현하고 내부 상태를 저장(객체 공유 시 내부 상태 저장 및 관리)
- **Flyweight Factory**: Flyweight 객체 관리 및 필요에 따라 새로운 객체 생성, 기존 객체를 반환하는 역할. 동일한 내부 상태를 가진 객체를 공유하여 중복 방지
- **Client**: Flyweight 객체를 사용하여 작업 수

동일한 이름의 카테고리를 중복 생성하지 않고 재사용하여 메모리 최적화

```typescript
// Flyweight.ts
class ProductCategory {
    constructor(private categoryName: string) {}

    getCategoryName(): string {
        return this.categoryName;
    }
}

// FlyweightFactory.ts
class CategoryFactory {
    private categories: { [key: string]: ProductCategory } = {};

    getCategory(categoryName: string): ProductCategory {
        if (!this.categories[categoryName]) {
            this.categories[categoryName] = new ProductCategory(categoryName);
        }
        return this.categories[categoryName];
    }
}

```

```typescript
// Product.ts
class Product {
    constructor(private name: string, private price: number, private category: ProductCategory) {}

    getProductInfo(): string {
        return `Name: ${this.name}, Price: $${this.price}, Category: ${this.category.getCategoryName()}`;
    }
}

```

```typescript
// Usage
const categoryFactory = new CategoryFactory();

// 카테고리 생성
const clothingCategory = categoryFactory.getCategory("Clothing");
const electronicsCategory = categoryFactory.getCategory("Electronics");

// 제품 생성
const product1 = new Product("T-shirt", 20, clothingCategory);
const product2 = new Product("Smartphone", 500, electronicsCategory);

// 제품 정보 출력
console.log(product1.getProductInfo());
console.log(product2.getProductInfo());

```


## 프록시(proxy) 패턴

다른 객체에 대한 접근을 제어하기 위해 객체의 대리인 역할을 하는 객체를 제공하는 구조

- 지연 초기화, 액세스 제어, 원격 서비스, 로깅, 캐싱

  
```typescript
/// 1. Subject 인터페이스
interface Product {
    getId(): number;
    getName(): string;
    getDetails(): string;
}

/// 2. RealSubject 클래스
class RealProduct implements Product {
    private id: number;
    private name: string;
    private details: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
        // 실제 데이터베이스 호출을 통해 제품 세부 정보를 로드
        this.details = this.loadDetailsFromDatabase();
    }

    getId(): number {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    getDetails(): string {
        return this.details;
    }

    private loadDetailsFromDatabase(): string {
        // 가정: 데이터베이스에서 제품 세부 정보를 로드
        console.log(`Loading details from database for product ${this.id}`);
        return `Details of product ${this.id}`;
    }
}

/// 3. Proxy 클래스
class ProductProxy implements Product {
    private id: number;
    private name: string;
    private realProduct: RealProduct | null = null;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    getId(): number {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    getDetails(): string {
        if (this.realProduct === null) {
            this.realProduct = new RealProduct(this.id, this.name);
        }
        return this.realProduct.getDetails();
    }
}

/// 4. 사용법
// 제품 프록시 생성
const productProxy = new ProductProxy(1, "Laptop");

// 제품 ID와 이름은 즉시 사용할 수 있음
console.log(productProxy.getId()); // Output: 1
console.log(productProxy.getName()); // Output: Laptop

// 제품 세부 정보는 실제로 필요한 시점에 로드됨
console.log(productProxy.getDetails()); 
// Output: Loading details from database for product 1
// Output: Details of product 1

```


# 3. 행동 패턴


## 책임 연쇄(chain-of-responsibility) 패턴

- 요청을 처리하는 객체를 순차적으로 연결하고 요청을 처리
- 처리 방법이나 순서를 변경하기 쉽다
- 특정 요청을 여러 객체가 다룰 수 있다
- 요청이 확실히 처리된다는 보장이 없다

```typescript
/// 1. Handler 인터페이스
interface OrderHandler {
    setNext(handler: OrderHandler): OrderHandler;
    handle(request: Order): void;
}

/// 2. Base Handler 클래스
abstract class AbstractOrderHandler implements OrderHandler {
    private nextHandler: OrderHandler | null = null;

    public setNext(handler: OrderHandler): OrderHandler {
        this.nextHandler = handler;
        return handler;
    }

    public handle(request: Order): void {
        if (this.nextHandler) {
            this.nextHandler.handle(request);
        }
    }
}

/// 3. Concrete Handlers 클래스
class PaymentHandler extends AbstractOrderHandler {
    public handle(request: Order): void {
        if (request.isPaymentValid()) {
            console.log('Payment processed for order', request.getId());
            super.handle(request);
        } else {
            console.log('Payment failed for order', request.getId());
        }
    }
}

class InventoryHandler extends AbstractOrderHandler {
    public handle(request: Order): void {
        if (request.isInStock()) {
            console.log('Inventory checked for order', request.getId());
            super.handle(request);
        } else {
            console.log('Out of stock for order', request.getId());
        }
    }
}

class ShippingHandler extends AbstractOrderHandler {
    public handle(request: Order): void {
        console.log('Shipping prepared for order', request.getId());
        super.handle(request);
    }
}

/// 4. Order 클래스
class Order {
    private id: number;
    private paymentValid: boolean;
    private inStock: boolean;

    constructor(id: number, paymentValid: boolean, inStock: boolean) {
        this.id = id;
        this.paymentValid = paymentValid;
        this.inStock = inStock;
    }

    public getId(): number {
        return this.id;
    }

    public isPaymentValid(): boolean {
        return this.paymentValid;
    }

    public isInStock(): boolean {
        return this.inStock;
    }
}

/// 5. 사용법
const order = new Order(1, true, true);

const paymentHandler = new PaymentHandler();
const inventoryHandler = new InventoryHandler();
const shippingHandler = new ShippingHandler();

paymentHandler.setNext(inventoryHandler).setNext(shippingHandler);

// 주문 처리 파이프라인 시작
paymentHandler.handle(order);

```


## 이터레이터(Iterator) 패턴

컬렉션의 내부 구현을 노출하지 않고 순차적으로 접근할 수 있도록 하는 패턴

Iterator 개체 마다 고유한 반복 상태를 가지고 있어 병렬적으로 탐색 가능

```typescript
/// 1. Product 클래스
class Product {
    constructor(private id: number, private name: string) {}

    getId(): number {
        return this.id;
    }

    getName(): string {
        return this.name;
    }
}

/// 2. Iterator 인터페이스
interface Iterator<T> {
    current(): T;
    next(): T;
    hasNext(): boolean;
}

/// 3. Concrete Iterator 클래스
class ProductIterator implements Iterator<Product> {
    private position: number = 0;

    constructor(private products: Product[]) {}

    current(): Product {
        if (this.position < this.products.length) {
            return this.products[this.position];
        }
        throw new Error("Out of bounds");
    }

    next(): Product {
        if (this.hasNext()) {
            return this.products[this.position++];
        }
        throw new Error("No more elements");
    }

    hasNext(): boolean {
        return this.position < this.products.length;
    }
}

/// 4. Aggregate 인터페이스
interface Aggregate<T> {
    createIterator(): Iterator<T>;
}

/// 5. Concrete Aggregate 클래스
class ProductCollection implements Aggregate<Product> {
    private products: Product[] = [];

    addProduct(product: Product): void {
        this.products.push(product);
    }

    createIterator(): Iterator<Product> {
        return new ProductIterator(this.products);
    }
}

/// 6. 사용법
const product1 = new Product(1, "Laptop");
const product2 = new Product(2, "Smartphone");
const product3 = new Product(3, "Tablet");

const productCollection = new ProductCollection();
productCollection.addProduct(product1);
productCollection.addProduct(product2);
productCollection.addProduct(product3);

const iterator = productCollection.createIterator();

while (iterator.hasNext()) {
    const product = iterator.next();
    console.log(`Product ID: ${product.getId()}, Name: ${product.getName()}`);
}

```


## 메멘토(Memento) 패턴

- 객체의 상태를 기억하고, 되돌릴 수 있도록 해주는 패턴
- 객체 상태의 스냅샷 저장
- 스냅샷이 너무 많으면 메모리 소모가 커짐


```typescript
/// 1. Originator 클래스
class Originator {
    private state: string;

    constructor(state: string) {
        this.state = state;
    }

    public setState(state: string): void {
        console.log(`Originator: Setting state to ${state}`);
        this.state = state;
    }

    public getState(): string {
        return this.state;
    }

    public save(): Memento {
        console.log(`Originator: Saving to Memento.`);
        return new Memento(this.state);
    }

    public restore(memento: Memento): void {
        this.state = memento.getState();
        console.log(`Originator: State after restoring from Memento: ${this.state}`);
    }
}

/// 2. Memento 클래스
class Memento {
    private readonly state: string;

    constructor(state: string) {
        this.state = state;
    }

    public getState(): string {
        return this.state;
    }
}

/// 3. Caretaker 클래스
class Caretaker {
    private mementos: Memento[] = [];
    private originator: Originator;

    constructor(originator: Originator) {
        this.originator = originator;
    }

    public backup(): void {
        console.log(`Caretaker: Saving Originator's state...`);
        this.mementos.push(this.originator.save());
    }

    public undo(): void {
        if (!this.mementos.length) {
            return;
        }
        const memento = this.mementos.pop();
        console.log(`Caretaker: Restoring state to: ${memento.getState()}`);
        this.originator.restore(memento);
    }

    public showHistory(): void {
        console.log(`Caretaker: Here's the list of mementos:`);
        for (const memento of this.mementos) {
            console.log(memento.getState());
        }
    }
}

/// 4. 사용법
// Client code
const originator = new Originator("State1");
const caretaker = new Caretaker(originator);

caretaker.backup();
originator.setState("State2");

caretaker.backup();
originator.setState("State3");

caretaker.backup();
originator.setState("State4");

console.log("");
caretaker.showHistory();

console.log("\nClient: Now, let's rollback!\n");
caretaker.undo();

console.log("\nClient: Once more!\n");
caretaker.undo();

```


## 옵저버(Observer) 패턴

변경 사항을 자동으로 알리는 패턴

관찰자는 대상의 상태에 대해 관심을 등록(subscribe)

관심을 가지는 내용이 변경되면 관찰자는 업데이트 메서드를 호출하여 알림을 전송

애플리케이션을 더 작고 느슨하게 결합

단점:

- 시스템 분리로 인해 애플리케이션의 예상대로 동작한다고 보장하기 어려워 질 수 있음

```typescript
/// 1. 옵저버 및 주제 인터페이스 정의
// Observer.ts
export interface Observer {
    update(productName: string, stock: number): void;
}

// Subject.ts
export interface Subject {
    registerObserver(observer: Observer): void;
    removeObserver(observer: Observer): void;
    notifyObservers(): void;
}

/// 2. 구체적인 주제 클래스 구현
// Product.ts
import { Subject } from './Subject';
import { Observer } from './Observer';

export class Product implements Subject {
    private observers: Observer[] = [];
    private stock: number;

    constructor(public name: string, initialStock: number) {
        this.stock = initialStock;
    }

    registerObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    removeObserver(observer: Observer): void {
        const index = this.observers.indexOf(observer);
        if (index > -1) {
            this.observers.splice(index, 1);
        }
    }

    notifyObservers(): void {
        for (const observer of this.observers) {
            observer.update(this.name, this.stock);
        }
    }

    setStock(stock: number): void {
        this.stock = stock;
        this.notifyObservers();
    }

    getStock(): number {
        return this.stock;
    }
}

/// 구체적인 옵저버 클래스 구현
// StockObserver.ts
import { Observer } from './Observer';

export class StockObserver implements Observer {
    constructor(private name: string) {}

    update(productName: string, stock: number): void {
        console.log(`${this.name} notified. ${productName} stock is now ${stock}.`);
    }
}

/// 4. 옵저버 패턴 사용
// app.ts
import { Product } from './Product';
import { StockObserver } from './StockObserver';

const product = new Product('Laptop', 10);

const observer1 = new StockObserver('Observer 1');
const observer2 = new StockObserver('Observer 2');

// 옵저버 등록
product.registerObserver(observer1);
product.registerObserver(observer2);

// 재고 변경
product.setStock(8);  // Observer 1 notified. Laptop stock is now 8.  // Observer 2 notified. Laptop stock is now 8.
product.setStock(5);  // Observer 1 notified. Laptop stock is now 5.  // Observer 2 notified. Laptop stock is now 5.

```


## 상태(State) 패턴

```typescript
/// 1. State 인터페이스
interface State {
    start(task: Task): void;
    complete(task: Task): void;
    cancel(task: Task): void;
}

/// 2. Task 클래스
class Task {
    private state: State;
    private name: string;

    constructor(name: string) {
        this.name = name;
        this.state = new PendingState();
    }

    public setState(state: State): void {
        this.state = state;
    }

    public start(): void {
        this.state.start(this);
    }

    public complete(): void {
        this.state.complete(this);
    }

    public cancel(): void {
        this.state.cancel(this);
    }

    public getName(): string {
        return this.name;
    }

    public getState(): State {
        return this.state;
    }
}

/// 3. 구체적인 상태 클래스
class PendingState implements State {
    public start(task: Task): void {
        console.log(`Starting task: ${task.getName()}`);
        task.setState(new InProgressState());
    }

    public complete(task: Task): void {
        console.log(`Task ${task.getName()} cannot be completed because it is still pending.`);
    }

    public cancel(task: Task): void {
        console.log(`Cancelling task: ${task.getName()}`);
        // Optional: Transition to a CancelledState if needed
    }
}

class InProgressState implements State {
    public start(task: Task): void {
        console.log(`Task ${task.getName()} is already in progress.`);
    }

    public complete(task: Task): void {
        console.log(`Completing task: ${task.getName()}`);
        task.setState(new CompletedState());
    }

    public cancel(task: Task): void {
        console.log(`Cancelling task: ${task.getName()}`);
        // Optional: Transition to a CancelledState if needed
    }
}

class CompletedState implements State {
    public start(task: Task): void {
        console.log(`Task ${task.getName()} is already completed and cannot be started.`);
    }

    public complete(task: Task): void {
        console.log(`Task ${task.getName()} is already completed.`);
    }

    public cancel(task: Task): void {
        console.log(`Task ${task.getName()} is already completed and cannot be cancelled.`);
    }
}

/// 4. 사용법
const task1 = new Task("Write unit tests");
const task2 = new Task("Implement feature X");

task1.start();    // Starting task: Write unit tests
task1.complete(); // Completing task: Write unit tests
task1.start();    // Task Write unit tests is already completed and cannot be started.

task2.start();    // Starting task: Implement feature X
task2.cancel();   // Cancelling task: Implement feature X
task2.complete(); // Task Implement feature X cannot be completed because it is still pending.

```


## 전략(Strategy) 패턴

- 일련의 알고리즘을 정의하고 각 알고리즘을 별도의 클래스에 배치하며 객체를 상호 교환 가능하게 만드는 패턴
- 다양한 알고리즘이 필요할 때, 알고리즘의 세부 구현을 분리
- 상속을 구성으로 대체

```typescript
/// 1. Strategy 인터페이스
interface PaymentStrategy {
    pay(amount: number): void;
}

/// 2. 구체적인 전략 클래스
class CreditCardStrategy implements PaymentStrategy {
    private name: string;
    private cardNumber: string;
    private cvv: string;
    private dateOfExpiry: string;

    constructor(name: string, cardNumber: string, cvv: string, dateOfExpiry: string) {
        this.name = name;
        this.cardNumber = cardNumber;
        this.cvv = cvv;
        this.dateOfExpiry = dateOfExpiry;
    }

    public pay(amount: number): void {
        console.log(`${amount} paid with credit card.`);
    }
}

class PayPalStrategy implements PaymentStrategy {
    private emailId: string;
    private password: string;

    constructor(emailId: string, password: string) {
        this.emailId = emailId;
        this.password = password;
    }

    public pay(amount: number): void {
        console.log(`${amount} paid using PayPal.`);
    }
}

class BitcoinStrategy implements PaymentStrategy {
    private walletAddress: string;

    constructor(walletAddress: string) {
        this.walletAddress = walletAddress;
    }

    public pay(amount: number): void {
        console.log(`${amount} paid using Bitcoin.`);
    }
}

/// 3. Context 클래스
class ShoppingCart {
    private items: { name: string, price: number }[] = [];
    private paymentStrategy: PaymentStrategy;

    public addItem(item: { name: string, price: number }): void {
        this.items.push(item);
    }

    public setPaymentStrategy(paymentStrategy: PaymentStrategy): void {
        this.paymentStrategy = paymentStrategy;
    }

    public checkout(): void {
        const totalAmount = this.items.reduce((sum, item) => sum + item.price, 0);
        this.paymentStrategy.pay(totalAmount);
    }
}

/// 4. 사용법
// Client code
const cart = new ShoppingCart();

cart.addItem({ name: "Book", price: 10 });
cart.addItem({ name: "Pen", price: 2 });

cart.setPaymentStrategy(new CreditCardStrategy("John Doe", "1234567890123456", "123", "12/23"));
cart.checkout(); // 12 paid with credit card.

cart.setPaymentStrategy(new PayPalStrategy("john.doe@example.com", "password"));
cart.checkout(); // 12 paid using PayPal.

cart.setPaymentStrategy(new BitcoinStrategy("1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa"));
cart.checkout(); // 12 paid using Bitcoin.

```


##


## 템플릿 메서드(Template Method) 패턴

- 슈퍼 클래스의 알고리즘의 뼈대만 정의하고, 하위 클래스에서는 알고리즘의 구조를 변경하지 않고 알고리즘의 특정 단계를 재정의

```typescript
/// 1. abstract class
abstract class OrderProcessor {
    public processOrder(): void {
        this.selectProduct();
        this.calculateTotal();
        this.applyDiscount();
        this.confirmPayment();
        this.shipProduct();
    }

    protected abstract selectProduct(): void;
    protected abstract calculateTotal(): void;
    protected abstract applyDiscount(): void;

    protected confirmPayment(): void {
        console.log("Payment confirmed.");
    }

    protected shipProduct(): void {
        console.log("Product shipped.");
    }
}

/// 2. concrete classes
class CreditCardOrderProcessor extends OrderProcessor {
    protected selectProduct(): void {
        console.log("Product selected for Credit Card payment.");
    }

    protected calculateTotal(): void {
        console.log("Total amount calculated for Credit Card payment.");
    }

    protected applyDiscount(): void {
        console.log("Discount applied for Credit Card payment.");
    }
}

class PayPalOrderProcessor extends OrderProcessor {
    protected selectProduct(): void {
        console.log("Product selected for PayPal payment.");
    }

    protected calculateTotal(): void {
        console.log("Total amount calculated for PayPal payment.");
    }

    protected applyDiscount(): void {
        console.log("Discount applied for PayPal payment.");
    }
}

/// 3. 사용법
const creditCardOrderProcessor = new CreditCardOrderProcessor();
creditCardOrderProcessor.processOrder();

const payPalOrderProcessor = new PayPalOrderProcessor();
payPalOrderProcessor.processOrder();

```


## 방문자(Visitor) 패턴

- 객체의 구조와 기능(알고리즘)을 분리하는 패턴
- 유연성 증가

```typescript
/// 1. Visitor (방문자) 인터페이스
interface Visitor {
    visitProduct(product: Product): void;
    visitCoupon(coupon: Coupon): void;
    visitShippingInfo(shippingInfo: ShippingInfo): void;
}

/// 2. ConcreteVisitor (구체적인 방문자)
class OrderProcessingVisitor implements Visitor {
    visitProduct(product: Product): void {
        console.log(`Processing product: ${product.name}`);
    }

    visitCoupon(coupon: Coupon): void {
        console.log(`Applying coupon: ${coupon.code}`);
    }

    visitShippingInfo(shippingInfo: ShippingInfo): void {
        console.log(`Processing shipping: ${shippingInfo.address}`);
    }
}

/// 3. Element (요소) 인터페이스
interface Element {
    accept(visitor: Visitor): void;
}

/// 4. ConcreteElement (구체적인 요소)
class Product implements Element {
    constructor(public name: string) {}

    accept(visitor: Visitor): void {
        visitor.visitProduct(this);
    }
}

class Coupon implements Element {
    constructor(public code: string) {}

    accept(visitor: Visitor): void {
        visitor.visitCoupon(this);
    }
}

class ShippingInfo implements Element {
    constructor(public address: string) {}

    accept(visitor: Visitor): void {
        visitor.visitShippingInfo(this);
    }
}

/// 5. ObjectStructure (객체 구조)
class Order {
    private elements: Element[] = [];

    addElement(element: Element): void {
        this.elements.push(element);
    }

    accept(visitor: Visitor): void {
        this.elements.forEach(element => element.accept(visitor));
    }
}

/// 6. 사용법
const order = new Order();
order.addElement(new Product("Laptop"));
order.addElement(new Coupon("DISCOUNT20"));
order.addElement(new ShippingInfo("123 Main St."));

const orderProcessingVisitor = new OrderProcessingVisitor();
order.accept(orderProcessingVisitor);

```


## 발행/구독(Publish–subscribe) 패턴

```typescript
/// 1. 이벤트 버스 클래스 정의
// EventBus.ts
type EventCallback = (data: any) => void;

class EventBus {
    private subscribers: { [event: string]: EventCallback[] } = {};

    subscribe(event: string, callback: EventCallback): void {
        if (!this.subscribers[event]) {
            this.subscribers[event] = [];
        }
        this.subscribers[event].push(callback);
    }

    unsubscribe(event: string, callback: EventCallback): void {
        if (!this.subscribers[event]) return;
        this.subscribers[event] = this.subscribers[event].filter(sub => sub !== callback);
    }

    publish(event: string, data: any): void {
        if (!this.subscribers[event]) return;
        this.subscribers[event].forEach(callback => callback(data));
    }
}

export const eventBus = new EventBus();

/// 2. 상품 클래스 정의
// Product.ts
import { eventBus } from './EventBus';

export class Product {
    constructor(public name: string, private stock: number) {}

    setStock(stock: number): void {
        this.stock = stock;
        eventBus.publish('stockChanged', { name: this.name, stock: this.stock });
    }

    getStock(): number {
        return this.stock;
    }
}

/// 3. 구독자 클래스 정의
// StockSubscriber.ts
import { eventBus } from './EventBus';

class StockSubscriber {
    constructor(private name: string) {
        eventBus.subscribe('stockChanged', this.onStockChanged.bind(this));
    }

    onStockChanged(data: { name: string, stock: number }): void {
        console.log(`${this.name} notified. ${data.name} stock is now ${data.stock}.`);
    }
}

export { StockSubscriber };

/// 4. 사용법
// app.ts
import { Product } from './Product';
import { StockSubscriber } from './StockSubscriber';

const product = new Product('Laptop', 10);

const subscriber1 = new StockSubscriber('Subscriber 1');
const subscriber2 = new StockSubscriber('Subscriber 2');

// 재고 변경
product.setStock(8);  // Subscriber 1 notified. Laptop stock is now 8.
                      // Subscriber 2 notified. Laptop stock is now 8.

product.setStock(5);  // Subscriber 1 notified. Laptop stock is now 5.
                      // Subscriber 2 notified. Laptop stock is now 5.

```

**게시/구독 패턴과의 차이점**

관찰자 패턴: 주제 알림을 수신하려는 관찰자가 주제에 대해 관심 사항을 구독

게시/구독 패턴: 알림을 수신하는 개체(구독자)와 이벤트를 발생하는 개체(게시자) 사이에 중재자(주제/이벤트 채널)가 존재


## 중재자(Mediator) 패턴

중앙 객체인 중재자(mediator)를 통해 통신

객체 간의 결합도 감소, 시스템의 유연성과 유지보수성 향상

```typescript
/// 1. 미디에이터 인터페이스 정의
// Mediator.ts
export interface Mediator {
    notify(sender: object, event: string): void;
}

/// 2. 구체적인 미디에이터 클래스 구현
// EcommerceMediator.ts
import { Mediator } from './Mediator';
import { ShoppingCart } from './ShoppingCart';
import { PaymentSystem } from './PaymentSystem';

export class EcommerceMediator implements Mediator {
    private shoppingCart: ShoppingCart;
    private paymentSystem: PaymentSystem;

    setShoppingCart(cart: ShoppingCart): void {
        this.shoppingCart = cart;
    }

    setPaymentSystem(payment: PaymentSystem): void {
        this.paymentSystem = payment;
    }

    notify(sender: object, event: string): void {
        if (event === 'itemAdded') {
            console.log('Mediator reacts to itemAdded and triggers following operations:');
            this.shoppingCart.displayItems();
        }

        if (event === 'checkout') {
            console.log('Mediator reacts to checkout and triggers following operations:');
            this.paymentSystem.processPayment(this.shoppingCart.getTotal());
        }
    }
}

/// 3. 장바구니 클래스 구현
// ShoppingCart.ts
import { Mediator } from './Mediator';

export class ShoppingCart {
    private items: { name: string, price: number }[] = [];
    private mediator: Mediator;

    constructor(mediator: Mediator) {
        this.mediator = mediator;
    }

    addItem(item: { name: string, price: number }): void {
        this.items.push(item);
        this.mediator.notify(this, 'itemAdded');
    }

    getTotal(): number {
        return this.items.reduce((total, item) => total + item.price, 0);
    }

    displayItems(): void {
        console.log('Current items in the cart:', this.items);
    }

    checkout(): void {
        this.mediator.notify(this, 'checkout');
    }
}

/// 4. 결제 시스템 클래스 구현
// PaymentSystem.ts
import { Mediator } from './Mediator';

export class PaymentSystem {
    private mediator: Mediator;

    constructor(mediator: Mediator) {
        this.mediator = mediator;
    }

    processPayment(amount: number): void {
        console.log(`Processing payment of $${amount}`);
        // 실제 결제 로직을 여기에 추가합니다.
    }
}

/// 5. 사용법
// app.ts
import { EcommerceMediator } from './EcommerceMediator';
import { ShoppingCart } from './ShoppingCart';
import { PaymentSystem } from './PaymentSystem';

const mediator = new EcommerceMediator();

const shoppingCart = new ShoppingCart(mediator);
const paymentSystem = new PaymentSystem(mediator);

mediator.setShoppingCart(shoppingCart);
mediator.setPaymentSystem(paymentSystem);

// 장바구니에 아이템 추가
shoppingCart.addItem({ name: 'Laptop', price: 1000 });
shoppingCart.addItem({ name: 'Mouse', price: 50 });

// 장바구니 확인
shoppingCart.displayItems();

// 결제 처리
shoppingCart.checkout();  // Processing payment of $1050

```


## 명령(Command) 패턴

메서드 호출, 요청 또는 작업을 캡슐화하고 단일 객체로 통합.

메서드 호출을 매개변수화

작업 실행, 취소, 재실행 기능 구현 용이

명령 실행 책임을 분리하여 다른 객체에 위임

```typescript
/// 1. 커맨드 인터페이스 정의
// Command.ts
export interface Command {
    execute(): void;
    undo(): void;
}

/// 2. 수신자 클래스 구현
// ShoppingCart.ts
export class ShoppingCart {
    private items: { name: string, price: number }[] = [];

    addItem(item: { name: string, price: number }): void {
        this.items.push(item);
        console.log(`Added ${item.name} to the cart.`);
    }

    removeItem(item: { name: string, price: number }): void {
        const index = this.items.findIndex(i => i.name === item.name && i.price === item.price);
        if (index > -1) {
            this.items.splice(index, 1);
            console.log(`Removed ${item.name} from the cart.`);
        }
    }

    getItems(): { name: string, price: number }[] {
        return this.items;
    }

    getTotal(): number {
        return this.items.reduce((total, item) => total + item.price, 0);
    }
}

/// 3. 구체적인 커맨드 클래스 구현
// AddItemCommand.ts
import { Command } from './Command';
import { ShoppingCart } from './ShoppingCart';

export class AddItemCommand implements Command {
    private item: { name: string, price: number };

    constructor(private shoppingCart: ShoppingCart, item: { name: string, price: number }) {
        this.item = item;
    }

    execute(): void {
        this.shoppingCart.addItem(this.item);
    }

    undo(): void {
        this.shoppingCart.removeItem(this.item);
    }
}

// RemoveItemCommand.ts
import { Command } from './Command';
import { ShoppingCart } from './ShoppingCart';

export class RemoveItemCommand implements Command {
    private item: { name: string, price: number };

    constructor(private shoppingCart: ShoppingCart, item: { name: string, price: number }) {
        this.item = item;
    }

    execute(): void {
        this.shoppingCart.removeItem(this.item);
    }

    undo(): void {
        this.shoppingCart.addItem(this.item);
    }
}

/// 4. 호출자 클래스 구현
// CommandManager.ts
import { Command } from './Command';

export class CommandManager {
    private commandHistory: Command[] = [];

    executeCommand(command: Command): void {
        this.commandHistory.push(command);
        command.execute();
    }

    undo(): void {
        const command = this.commandHistory.pop();
        if (command) {
            command.undo();
        }
    }
}

/// 5. 사용법
// app.ts
import { ShoppingCart } from './ShoppingCart';
import { AddItemCommand } from './AddItemCommand';
import { RemoveItemCommand } from './RemoveItemCommand';
import { CommandManager } from './CommandManager';

const shoppingCart = new ShoppingCart();
const commandManager = new CommandManager();

const item1 = { name: 'Laptop', price: 1000 };
const item2 = { name: 'Mouse', price: 50 };

const addItemCommand1 = new AddItemCommand(shoppingCart, item1);
const addItemCommand2 = new AddItemCommand(shoppingCart, item2);
const removeItemCommand1 = new RemoveItemCommand(shoppingCart, item1);

// 아이템 추가
commandManager.executeCommand(addItemCommand1); // Added Laptop to the cart.
commandManager.executeCommand(addItemCommand2); // Added Mouse to the cart.

// 현재 장바구니 상태
console.log(shoppingCart.getItems()); // [{ name: 'Laptop', price: 1000 }, { name: 'Mouse', price: 50 }]

// 아이템 제거
commandManager.executeCommand(removeItemCommand1); // Removed Laptop from the cart.

// 현재 장바구니 상태
console.log(shoppingCart.getItems()); // [{ name: 'Mouse', price: 50 }]

// 마지막 명령 실행 취소 (아이템 다시 추가)
commandManager.undo(); // Added Laptop to the cart.

// 현재 장바구니 상태
console.log(shoppingCart.getItems()); // [{ name: 'Mouse', price: 50 }, { name: 'Laptop', price: 1000 }]

```

