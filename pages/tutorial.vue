<template>
  <div class="min-h-screen bg-background dark:bg-background-dark">
    <div class="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div class="prose dark:prose-invert max-w-none">
        <h1 class="text-text dark:text-text-dark">使用教程</h1>
        
        <h2 class="text-text dark:text-text-dark">1. 创建Markdown文件</h2>
        <p class="text-text/80 dark:text-text-dark/80">在项目根目录下创建<code>content</code>文件夹，并在其中添加Markdown文件：</p>
        <pre class="bg-background dark:bg-background-dark border border-border dark:border-border-dark"><code class="language-bash">mkdir content
echo "# 我的第一个页面" > content/page1.md</code></pre>

        <h2 class="text-text dark:text-text-dark">2. 编写内容</h2>
        <p class="text-text/80 dark:text-text-dark/80">使用Markdown语法编写内容：</p>
        <pre class="bg-background dark:bg-background-dark border border-border dark:border-border-dark"><code class="language-markdown"># 标题

这是段落内容

- 列表项1
- 列表项2

```javascript
// 代码示例
console.log('Hello World');
```</code></pre>

        <h2 class="text-text dark:text-text-dark">3. 实时预览</h2>
        <p class="text-text/80 dark:text-text-dark/80">启动开发服务器：</p>
        <pre class="bg-background dark:bg-background-dark border border-border dark:border-border-dark"><code class="language-bash">pnpm dev</code></pre>
        <p class="text-text/80 dark:text-text-dark/80">访问 <code>http://localhost:3000</code> 查看效果</p>

        <h2 class="text-text dark:text-text-dark">4. 部署</h2>
        <p class="text-text/80 dark:text-text-dark/80">构建生产环境代码：</p>
        <pre class="bg-background dark:bg-background-dark border border-border dark:border-border-dark"><code class="language-bash">pnpm build</code></pre>
        <p class="text-text/80 dark:text-text-dark/80">将<code>.output</code>目录中的内容部署到你的服务器</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: '使用教程'
})
</script>
