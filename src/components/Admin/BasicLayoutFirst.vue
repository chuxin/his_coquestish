<template>
    <div>
        这是布局111
        <h4>这里用了 moment 插件 </h4>
        <pre>
            '2014/04/23 09:54:51'
            {{ '2014-04-23T09:54:51' | moment_format('YYYY-MM-DD HH:mm') }}
            {{ 'Wed, 23 Apr 2014 09:54:51 +0000' | moment_format('YYYY-MM-DD HH:mm') }}
            {{ new Date('Wed, 23 Apr 2014 09:54:51 +0000') | moment_format('YYYY-MM-DD HH:mm') }}
        </pre>
    </div>
</template>
