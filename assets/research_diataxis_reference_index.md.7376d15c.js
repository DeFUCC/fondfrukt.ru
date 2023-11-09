import{_ as a,o as e,c as r,d as t}from"./chunks/framework.bfe12c2a.js";const o="/assets/liquorice.d06d1134.png",m=JSON.parse('{"title":"Справочники","description":"Справочные материалы — технические описания механизмов и того, как ими оперировать. Справочные материалы ориентированы на информацию.","frontmatter":{"title":"Справочники","description":"Справочные материалы — технические описания механизмов и того, как ими оперировать. Справочные материалы ориентированы на информацию.","date":"2022-01-01T00:00:00.000Z","cover":"overview-reference.png"},"headers":[],"relativePath":"research/diataxis/reference/index.md","filePath":"research/diataxis/reference/index.md"}'),n={name:"research/diataxis/reference/index.md"},i=t('<p>Единственное назначение справочника – описать, насколько возможно лаконично и упорядоченно. В то время как содержание руководств и инструкций следуют за потребностями пользователя, справочник следует за продуктом, который он описывает.</p><p>В случае программ, справочник описывает программу как таковую: API, классы, функции и т.д., а также как их использовать.</p><p>Пользователям нужны справочные материалы потому что им нужна правда и уверенность – твердые основания на которые можно опереться в работе. Хорошая техническая документация насущно необходима чтобы дать пользователям уверенность в их работе.</p><hr><h2 id="справочник-как-объяснение" tabindex="-1">Справочник как объяснение <a class="header-anchor" href="#справочник-как-объяснение" aria-label="Permalink to &quot;Справочник как объяснение&quot;">​</a></h2><p>Справочные материалы должны быть <strong>суровы и по делу</strong>. Редко кто-то <em>читает</em> справочник, чаще мы <em>консультируемся</em> с ним.</p><p>В справочнике не должно быть сомнений и неоднозначности. Он должен быть абсолютно авторитетен.</p><p>Справочник как карта. Карта говорит вам что вам нужно знать про территорию без необходимости пойти и проверить эту территорию самому. Справочные материалы служать той же самой цели для продукта, что и его внутренняя машинерия.</p><p>Хотя справочник не должен пытаться показать как выполнять то или иное действие, он может и часто должен включать описание того как что-то работает или как это правильно использовать.</p><p>Некоторые справочные материалы (такие как документация API) могут быть сгенерированы автоматически программой, которую они описывают – это мощный способ убедиться что они продолжают точно соответсвовать коду. К несчастью, в мире слишком много разработчиков программ, которые думают6 что это и есть вся необходимая документация.</p><hr><h2 id="пища-и-ее-приготовление" tabindex="-1">Пища и её приготовление <a class="header-anchor" href="#пища-и-ее-приготовление" aria-label="Permalink to &quot;Пища и её приготовление&quot;">​</a></h2><p><img src="'+o+'" alt="image"></p><p>Возможно вы можете свериться с энциклопедией, чтобы прочитать про ингредиент (к примеру – лакрица).</p><p>То, что вы ищете – информация – точная, современная, всеохватная информация. Вы можете захотеть узнать о его свойствах, химическом составе, о том, как он взаимодействует с другими интредиентами, с какими ингредиентами или растениями он связан, какие могут быть последствия его употребления на здоровье.</p><p>Например: «Лакрица - это цветковое растение семейства бобовых Fabaceae», или «Чрезмерное употребление лакрицы может привести к неблагоприятным последствиям».</p><p>Вы будете ожидать найти информацию обо всех этих гранях представленных в похожей для каждого форме.</p><p>С другой стороны вы не ожидаете найти, например, рецепты или предложения о том, как готовить с ней – говорить вам что делать – не входит в задачи энциклопедической статьи.</p><hr><h2 id="написание-хорошего-справочника" tabindex="-1">Написание хорошего справочника <a class="header-anchor" href="#написание-хорошего-справочника" aria-label="Permalink to &quot;Написание хорошего справочника&quot;">​</a></h2><blockquote><p><strong>Стиль и форма</strong></p><ul><li>сурово и бескомпромиссно</li><li>нейтральность, объективность, факты</li><li>структурированность в соответствии со структурой самой описываемой системы</li></ul></blockquote><h3 id="уважаите-структуру-системы" tabindex="-1">Уважайте структуру системы <a class="header-anchor" href="#уважаите-структуру-системы" aria-label="Permalink to &quot;Уважайте структуру системы&quot;">​</a></h3><p>То, как карта соответсвует территории, которую она описывает, помогает нам использовать первую, чтобы находить дорогу через последнюю. С документацией должно быть точно также: <strong>структурая документации должна отображать структуру продукта</strong>, чтобы пользователь мог прокладывать свой путь через них одновременно.</p><p>В случае с кодом, это означает что расположение секций справочных материалов, где это возможно, следует архитектуре самой программы</p><p>Это не означает превратить документацию в неестественную структуру. Что важно – это логическое, концептуальное расположение и связи внутри кода должны помогать понять документацию.</p><h3 id="будьте-последовательны" tabindex="-1">Будьте последовательны <a class="header-anchor" href="#будьте-последовательны" aria-label="Permalink to &quot;Будьте последовательны&quot;">​</a></h3><p><strong>Справочные материалы выигрывают от последовательности</strong>. Постоянство важно в структуре, языке, терминологии, тоне. В писательстве есть масса возможностей порадовать ваших читателей богатым словарем и владением множеством стилей, но справочник – то точно не одна из них.</p><h3 id="ничего-кроме-объяснении" tabindex="-1">Ничего кроме объяснений <a class="header-anchor" href="#ничего-кроме-объяснении" aria-label="Permalink to &quot;Ничего кроме объяснений&quot;">​</a></h3><p><strong>У технической справки одна задача – описывать.</strong> И делать это ясно, точно и всесторонне. Делать что-то ещё: объяснять, обсуждать, инструктировать, размышлять – все это будет помехами для этой задачи и сделает для читателя поиск необходимой информации труднее.</p><p>Может быть соблазнительно добавить инструкцию или объяснение, просто потому что техническая справка может показаться слишком голой. Вместо этого по мере необходимости давайте ссылки на инструкции, объяснения и вводные руководства.</p><h3 id="предоставьте-примеры" tabindex="-1">Предоставьте примеры <a class="header-anchor" href="#предоставьте-примеры" aria-label="Permalink to &quot;Предоставьте примеры&quot;">​</a></h3><p><strong>Примеры</strong> – это важные способы предоставить иллюстрации, которые помогают читателям понять справку, не отвлекаясь при этом от задачи описания. Например, пример использования команды может быть лаконичным способом проиллюстрировать её и её контекст.</p><h3 id="будьте-точны" tabindex="-1">Будьте точны <a class="header-anchor" href="#будьте-точны" aria-label="Permalink to &quot;Будьте точны&quot;">​</a></h3><p><strong>Эти описания должны быть точны и актуальны.</strong> Любые несоотвествия между системой и её описанием будут неизбежно вводить пользователя в заблуждение.</p><hr><h2 id="язык-справочных-материалов" tabindex="-1">Язык справочных материалов <a class="header-anchor" href="#язык-справочных-материалов" aria-label="Permalink to &quot;Язык справочных материалов&quot;">​</a></h2><p><strong>А - это пример Б. В необходимо инициализировать с помощью Г. Эта опция делает это.</strong> - Утверждайте факты о системе и её поведении</p><p><strong>Подкомандами являются: а,б,в,г,д,е.</strong> - Перечисляйте команды, опции, операции, возможности, флаги, ограничения, сообщения об ошибках и т.д.</p><p><strong>Вам нужно использовать А. Н применяйте Б пока не С. Никогда не делайте D.</strong> - При необходимости – предупреждайте.</p>',39),s=[i];function p(h,l,c,d,_,u){return e(),r("div",null,s)}const b=a(n,[["render",p]]);export{m as __pageData,b as default};