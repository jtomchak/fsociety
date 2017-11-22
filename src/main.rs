fn main() {
    println!("Hello, world!");
}

// You may wish to compile Rust code in a way so that it can be called from C.
// This is fairly easy, but requires a few things: no_mangle
#[no_mangle]
pub fn add(a: i32, b: i32) -> i32 {
    return a + b;
}

#[no_mangle]
pub fn fact(mut n: i32) -> i32 {
    let mut result = 1;
    while n > 0 {
        result = result * n;
        n = n - 1;
    }
    result
}