import {
    assertEquals,
    asertStringIncludes,
    assertArrayIncludes
} from "http://deno.land/std/testing/asserts.ts"

let aluno = 'Cróvis José'
let professores = ['João', 'Laís', 'davi', 'Bruno Aparecido Cano', 'Alan']

deno.test("Teste de assertion (API)", () => {
   assertEquals(aluno, "Cróvis José");
   assertStringIncludes(aluno, "José");
})

deno.test("Testando array do professor (API)", () => {
    assertArrayIncludes(professores,
        ["Davi", "Laís", "Alan"],
        "Opa deu rui,"
    )
 })
 
