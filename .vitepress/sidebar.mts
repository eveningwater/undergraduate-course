import { glob } from 'glob';
import path from 'path';
import { DefaultTheme } from 'vitepress';

/**
 * 读取所有的 md 文件，生成侧边栏，数据格式参考ts类型定义 DefaultTheme.Sidebar
 */
const mdFiles = glob.sync('./docs/**/*.md');

const sidebarMap = mdFiles.reduce<DefaultTheme.Sidebar>((acc, filePath) => {
    const relativePath = path.relative('docs', filePath).replace('.md', '');
    const segments = relativePath.split(path.sep);

    const dirName = segments.slice(0, -1).join('/');
    const dirPath = `/${dirName}/`;
    const fileName = segments[segments.length - 1];

    if (!acc[dirPath]) {
        acc[dirPath] = [
            {
                text: dirName,
                collapsed: true,
                items: []
            }
        ];
    }

    const sidebarItem = acc[dirPath][0];
    sidebarItem.items.push({
        text: fileName.toLowerCase(),
        link: `/${filePath}`,
    });

    return acc;
}, {});

const collator = new Intl.Collator('zh', { sensitivity: 'base' });

for (const dir in sidebarMap) {
    const current = (sidebarMap?.[dir]?.[0] as DefaultTheme.SidebarItem);
    current?.items?.sort((a, b) => collator.compare(a.text!, b.text!));
}

const sidebarKeys = Object.keys(sidebarMap).sort((a, b) => collator.compare(a, b));

export const sidebar = sidebarKeys.reduce<DefaultTheme.SidebarItem[]>((acc, key) => (acc.push(...sidebarMap[key]), acc), []);
