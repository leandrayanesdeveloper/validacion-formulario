# 📝 Formulario de Validación con JavaScript

Proyecto de un formulario de registro con **validación de campos en tiempo real** utilizando **HTML**, **CSS** y **JavaScript (Vanilla JS)**. Se enfoca en el uso de **Expresiones Regulares (RegEx)** para aplicar reglas de validación detalladas.

---

## ✨ Características Principales

* **Validación en tiempo real:** Los campos se validan mientras el usuario escribe.
* **Reglas de Validación (RegEx):** Se utilizan expresiones regulares para asegurar formatos correctos en:
    * **Nombre de Usuario:** Alfanumérico, 4-8 caracteres.
    * **Email:** Formato estándar.
    * **Contraseña:** 8-10 caracteres, requiere Mayúscula, minúscula y número.
* **Campos Interconectados:**
    * La selección de **País** actualiza el prefijo del código telefónico.
    * La **Confirmación de Contraseña** debe coincidir con la contraseña principal.
* **Botón de Envío Dinámico:** El botón de `Registrar` se **habilita solo** cuando **todos** los campos han sido validados correctamente.

---

## ⚙️ Lógica Central

La validación se maneja mediante una función centralizada (`validation`) que:

1.  Ejecuta `NOMBRE_USUARIO_REGEX.test(valor)` (y similares) en cada `input`.
2.  Aplica clases de estilo (`correct` o `incorrect`).
3.  Actualiza el estado del botón de envío (`formBtn.disabled`) basándose en un conjunto de variables booleanas de validación (ej: `usernameValidation`, `emailValidation`, etc.).

---

## 🧑‍💻 Autor

Creado por **Leandra Yanes**, estudiante de Programación Full Stack en desarrollo.
* [GitHub Profile](https://github.com/leandrayanesdeveloper)
