import {
    assertStringIncludes,
    assertGreaterOrEqual,
    assertArrayIncludes,
    assertNotInstanceOf,
    assertObjectMatch,
    assertRejects,
    assertGreater,
    assertEquals, 
    assertFalse,
    assertMatch,
} from "http://deno.land/std/testing/asserts.ts"

Deno.test("Testes", async () => 
{
    let x = [1998, 2000, 2011];
    assertArrayIncludes([2012], x, "Deu Ruim!");

    assertEquals("hello", "world"); 

    assertStringIncludes("Hello", "ello");

    assertFalse(false);

    assertGreater(0, 1);

    assertGreaterOrEqual(1, 1);

    assertMatch("Raptor", RegExp(/Raptor/));

    assertNotInstanceOf(new Date(), Date);

    await assertRejects(async () => Promise.reject(new Error()));

    assertObjectMatch({ foo: "bar" }, { foo: "bar" });
});