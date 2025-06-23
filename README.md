# strnave1

Tento repozitář obsahuje zdrojový kód webu doktorky Strnadové. Zanechávám zde instrukce pro budoucí studenty, kteří údržbu webu převezmou. Pokud byste se potřebovali na něco zeptat, kontakt na mě najdete [na mém portfoliu](https://hynekfisera.cz).

## Základní informace

Web je postaven na frameworku Next.js, který je založen na Reactu. Pro tvorbu obsahu se používá MDX (Markdown s možností vkládání React komponent).

**Upozornění: Tento zdrojový kód neslouží k běhu webu na internetu, ale pouze pro lokální vývoj a úpravy obsahu. Pro nasazení je potřeba projekt zkompilovat až poté nasadit na server UHK (podrobnější informace viz níže). Tohle není TNPW1.**

### Úprava obsahu

Pro základní úpravu obsahu stačí ve složce `app` najít danou cestu ke stránce a upravit soubor `page.mdx`. Pro přidání nové stránky je třeba vytvořit nový soubor `page.mdx` v odpovídající cestě.

Pro složitější úpravy, jako jsou přidání nových komponent, změna stylů nebo přidání nových interaktivních testů, je třeba mít znalosti Reactu. Na YouTube najdete spoustu návodů, pokud ovládáte angličtinu tak doporučuji kanál "Traversy Media", popřípadě se můžete podívat na [mé tutoriály v češtině](https://vwa.cz).

## Instalace, spuštení a nasazení

Narozdíl od TNPW1, kde jste si mohli web spustit přímo z repozitáře, je tu potřeba nejdříve nainstalovat několik věcí a nastavit prostředí. Následující kroky jsou nutné pro úspěšný vývoj a nasazení webu.

### Vývoj

#### Instalace Node.js

Přestože UHK server nepodporuje Node.js, při vývoji se bez něj neobejdete. Nejdříve si tedy nainstalujte Node.js. Buď z [oficiálních stránek](https://nodejs.org/) nebo přes Node Version Manager (za mě lepší volba, ale pokud vůbec netušíte o co se jedná tak pro vás bude jednodušší stáhnout si instalátor z oficiálních stránek).

Úspěšnou instalaci si můžete ověřit příkazem v terminálu:
```bash
node -v
```

#### Instalace PNPM

Pro správu balíčků se používá PNPM. Také si ho nainstalujte jednou z metod na webových stránkách [pnpm.io](https://pnpm.io/installation).

Úspěšnou instalaci si můžete ověřit příkazem v terminálu:
```bash
pnpm -v
```

#### Enviromentální proměnné

V root složce projektu najdete soubor `.env.example`. Ten si zkopírujte a přejmenujte na `.env`. V něm je nastavena hodnota `NEXT_PUBLIC_BASE_URL`. To je cesta, která se automaticky přidává ke všem odkazům na webu. Aby se odkazy správně generovaly tak musíte tuto proměnnou nastavit na cestu, na které bude web nasazen.

Například UHK web doktorky Strnadové bude nasazen na
adrese `https://lide.uhk.cz/fim/ucitel/strnave1`, ta část `/fim/ucitel/strnave1` tedy musí být nastavena jako hodnota `NEXT_PUBLIC_BASE_URL`:
```dotenv
NEXT_PUBLIC_BASE_URL="/fim/ucitel/strnave1"
```

Během vývoje ji můžete nechat prázdnou, ale až budete projekt kompilovat pro nasazení na UHK web tak je potřeba ji **před kompilací** nastavit. Pro účely testování si tam můžete nastavit cestu ke svému studentskému webu.

#### Instalace balíčků

Abyste mohli web zkompilovat a spustit, musíte nainstalovat všechny potřebné balíčky. To provedete **v root složce projektu** pomocí příkazu:
```bash
pnpm install
```

#### Spuštění webu pro vývoj

Pro spuštění webu v režimu vývoje použijte **v root složce projektu** příkaz:
```bash
pnpm dev
```

Tím se spustí lokální server, na kterém si můžete web prohlížet a testovat. Obvykle běží na adrese `http://localhost:3000`. Změny v kódu se automaticky promítnou do běžícího webu, takže nemusíte server pokaždé znovu spouštět.

### Nasazení na UHK

Až budete hotovi s úpravami a budete chtít web nasadit na UHK, musíte nejdříve zkompilovat projekt. To provedete příkazem  **v root složce projektu**:
```bash
pnpm build
```

Tím se vytvoří složka `out`, která obsahuje zkompilovaný kód webu. Právě obsah této složky je potřeba nahrát na server UHK. V praxi to znamená, že přijdete za doktorkou Strnadovou na konzultaci, ona vás pustí k PC, vy tam dáte flashku a obsah složky `out` zkopírujete na disk `W`. Doporučuji před kopírováním obsah toho disku `W` smazat, ať tam nezůstane nic z předchozích verzí webu. Více informací najdete [na webu UHK](https://www.uhk.cz/cs/univerzita-hradec-kralove/uhk/celouniverzitni-pracoviste/oddeleni-informacnich-technologii/it-poradna/datova-uloziste-a-prace-se-soubory/sitove-disky#diskW).

Doporučuji, než půjdete web nasadit, vše vyzkoušet nejdříve u sebe. Tzn. v `.env` nastavte cestu k vašemu studentskému webu, spusťte `pnpm build`, obsah složky `out` libovolným způsobem (přes SFTP, VMware, nebo fyzicky na učebně) přesuňte na svůj disk `W` a zkontrolujte, že vše funguje. Pokud odkazy nefungují správně, zkontrolujte, že máte správně nastavenou proměnnou `NEXT_PUBLIC_BASE_URL` v `.env`. Také zkontrolujte, že jste pro vytváření odkazů použili komponentu `Link` z `@/components/utils/Link`, jak je popsáno níže.

## Další informace

### Omezená podpora funkcí

Server UHK nepočítá s tím, že budete používat Node.js, ale očekává klasické HTML soubory. To Next.js umí, a proto je v souboru `next.config.ts` nastaveno `output: "export"`. To ale znamená, že některé funkce Next.js, jako například server-side rendering (SSR) nebo API routy, nebudou fungovat. Všechny stránky jsou generovány jako statické HTML soubory. To jen pro pořádek, abyste věděli, že některé funkce Next.js nebudou fungovat, pokud byste se je pokusili použít. Vždy si zkontrolujte, že daná funkce je podporována v režimu exportu.

### Jak vytvářet odkazy

Na internetu najdete, že se pro vytváření odkazů v Next.js používá komponenta `Link` z balíčku `next/link`. **POZOR, v tomto projektu vám tento postup nebude správně fungovat.** Na vytváření odkazů sice používáme komponentu `Link`, ale musíte ji naimportovat z `@/components/utils/Link`, tedy:
```tsx
import Link from "@/components/utils/Link";
```

Odkaz tedy může vypadat například takto:
```tsx
<Link href="/psy1/ukoly/1_1">1.1 Jak se stát "seberealizujícím" člověkem</Link>
```

Jak již bylo zmíněno, je to z důvodu, že server UHK očekává klasické HTML soubory. Proto jsem musel vytvořit vlastní komponentu `Link`, která generuje odkazy ve správném formátu. Možná že to jde nějak nakonfigurovat, ale nevěděl jsem, zda je to na UHK povolené, tak jsem tím nechtěl zbytečně ztrácet čas.

#### Odkazy na soubory

Aby se k souborům nepřidávala přípona `.html`, musíte přidat atribut `file`. Například:
```tsx
<Link href="/doc/barvy.pdf" file>Co na Vás prozradí barvy?</Link>
```