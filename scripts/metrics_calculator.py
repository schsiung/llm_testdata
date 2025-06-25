import json
import os
from collections import defaultdict


def evaluate_jyhllm_results(directory_path):
    """评估jyhllm分析结果，按语言目录分组，增强结构兼容性"""
    lang_stats = defaultdict(lambda: {
        'TP': 0, 'FP': 0, 'TN': 0, 'FN': 0,
        'total_positives': 0,
        'total_negatives': 0,
        'act_positives': 0,
        'act_negatives': 0,
        'file_count': 0,
        'processed_files': 0,
        'empty_files': 0,
        'cwe_stats': defaultdict(lambda: {'TP': 0, 'FP': 0, 'TN': 0, 'FN': 0})
    })

    # 遍历主目录下的所有子目录
    for lang_dir in os.listdir(directory_path):
        lang_path = os.path.join(directory_path, lang_dir)
        if not os.path.isdir(lang_path):
            print(f"跳过非目录项: {lang_path}")
            continue

        #print(f"\n开始处理语言目录: {lang_dir}")
        lang_stats[lang_dir]['language'] = lang_dir

        # 遍历当前语言目录下的所有JSON文件
        json_files = [f for f in os.listdir(lang_path) if f.endswith('.json')]
        #print(f"找到 {len(json_files)} 个JSON文件")

        for file_name in json_files:
            file_path = os.path.join(lang_path, file_name)
            try:
                # 处理单个JSON文件并获取统计结果
                file_stats = process_single_json(file_path)

                if file_stats:
                    # 合并到语言级统计
                    merge_results(lang_stats[lang_dir], file_stats)
                    lang_stats[lang_dir]['processed_files'] += 1
                    if file_stats['TP'] + file_stats['FP'] + file_stats['TN'] + file_stats['FN'] == 0:
                        lang_stats[lang_dir]['empty_files'] += 1
                    #print(f"成功处理: {file_name} - 有效统计: {'是' if file_stats['TP'] > 0 else '否'}")
                else:
                    print(f"跳过空结果: {file_name}")
                    lang_stats[lang_dir]['empty_files'] += 1
            except Exception as e:
                print(f"处理文件 {file_name} 时出错: {str(e)}")

    # 计算评估指标
    for lang, stats in lang_stats.items():
        total = stats['TP'] + stats['FP'] + stats['TN'] + stats['FN']
        if total > 0:
            stats.update({
                'accuracy': (stats['TP'] + stats['TN']) / total,
                'precision': stats['TP'] / (stats['TP'] + stats['FP']) if (stats['TP'] + stats['FP']) > 0 else 0,
                'recall': stats['TP'] / (stats['TP'] + stats['FN']) if (stats['TP'] + stats['FN']) > 0 else 0,
                'f1_score': 2 * stats['TP'] / (2 * stats['TP'] + stats['FP'] + stats['FN']) if stats['TP'] > 0 else 0,
                'detection_rate': stats['TP'] / stats['total_positives'] if stats['total_positives'] > 0 else 0,
                'false_alarm_rate': stats['FP'] / stats['total_negatives'] if stats['total_negatives'] > 0 else 0
            })
        else:
            stats.update({
                'accuracy': 0, 'precision': 0, 'recall': 0,
                'f1_score': 0, 'detection_rate': 0, 'false_alarm_rate': 0
            })

    return lang_stats


def process_single_json(json_path):
    """处理单个JSON文件，支持多种结构并增强结果提取"""
    results = {
        'TP': 0, 'FP': 0, 'TN': 0, 'FN': 0,
        'total_positives': 0,
        'total_negatives': 0,
        'act_positives': 0,
        'act_negatives': 0,
        'file_entries': 0,
        'cwe_stats': defaultdict(lambda: {'TP': 0, 'FP': 0, 'TN': 0, 'FN': 0})
    }

    try:
        with open(json_path, 'r', encoding='utf-8') as f:
            data = json.load(f)
            print(f"解析JSON文件 {os.path.basename(json_path)} - 数据类型: {type(data)}")

            # 提取结果条目，支持多种结构
            if isinstance(data, list):
                all_results = data
                #print(f"  识别为列表结构，条目数: {len(all_results)}")
            elif isinstance(data, dict):
                # 尝试从常见关键字段提取
                all_results = [data]  # 尝试将整个字典作为单个条目
                #print(f"  识别为字典结构，尝试提取结果，条目数: {len(all_results)}")
            else:
                print(f"  未知数据类型: {type(data)}，无法处理")
                return None

    except json.JSONDecodeError:
        print(f"  JSON解析错误，跳过文件")
        return None

    results['file_entries'] = len(all_results)
    if not all_results:
        print(f"  警告: 文件中没有结果条目")
        return results

    #print(f"  开始处理 {len(all_results)} 个结果条目")
    for idx, result in enumerate(all_results):
        if not isinstance(result, dict):
            print(f"  警告: 条目 {idx} 不是字典类型，跳过")
            continue

        # 提取文件路径
        file_path = result['file_path']
        #print(f"  处理条目 {idx + 1}/{len(all_results)}: {file_path[:30]}...")

        # 1. 判断真实标签 (is_bad)
        is_bad=not ('good' in file_path.lower() or 'after' in file_path.lower())

        if is_bad:
            results['total_positives'] += 1
        else:
            results['total_negatives'] += 1

        # 2. 判断预测结果 (has_vul)
        vul_analysis = result.get('response', {}).get('vulnerability_analysis', {}).get('vulnerabilities', [])
        has_vul = bool(vul_analysis)

        if has_vul:
            results['act_positives'] += 1
        else:
            results['act_negatives'] += 1

        # 3. 更新混淆矩阵
        if is_bad and has_vul:
            results['TP'] += 1
            #print("  统计: TP +1")
        elif is_bad and not has_vul:
            results['FN'] += 1
            #print("  统计: FN +1")
        elif not is_bad and has_vul:
            results['FP'] += 1
            #print("  统计: FP +1")
        else:
            results['TN'] += 1
            #print("  统计: TN +1")

        # 4. 按CWE类型统计
        if has_vul:
            cwe = result.get('vul_type', result.get('cwe', 'UNKNOWN'))
            cwe = str(cwe).upper()  # 统一为大写
            #print(f"  CWE类型: {cwe}")
            if is_bad:
                results['cwe_stats'][cwe]['TP'] += 1
            else:
                results['cwe_stats'][cwe]['FP'] += 1

    # 仅返回有有效统计的结果
    if results['TP'] + results['FP'] + results['TN'] + results['FN'] > 0:
        return results
    return None if results['file_entries'] == 0 else results


def merge_results(target, source):
    """合并两个统计结果，包含详细的合并日志"""
    if not source:
        return

    # 合并基本统计量
    target['TP'] += source['TP']
    target['FP'] += source['FP']
    target['TN'] += source['TN']
    target['FN'] += source['FN']
    target['total_positives'] += source['total_positives']
    target['total_negatives'] += source['total_negatives']
    target['act_positives'] += source['act_positives']
    target['act_negatives'] += source['act_negatives']
    target['file_count'] += 1

    # 合并CWE统计
    for cwe, cwe_stats in source['cwe_stats'].items():
        target_cwe = target['cwe_stats'][cwe]
        target_cwe['TP'] += cwe_stats['TP']
        target_cwe['FP'] += cwe_stats['FP']
        target_cwe['TN'] += cwe_stats['TN']
        target_cwe['FN'] += cwe_stats['FN']

    # 打印合并摘要


# 使用示例
if __name__ == "__main__":
    directory = "results"
    print(f"开始分析目录: {directory}")
    metrics = evaluate_jyhllm_results(directory)

    # 输出详细结果
    print("\n===== 分析结果汇总 =====")
    for lang, stats in metrics.items():
        print(f"\n语言: {lang}")
        print(f"  处理文件数: {stats['file_count']}")
        print(f"  有效文件数: {stats['file_count'] - stats['empty_files']}")
        print(f"  空结果文件数: {stats['empty_files']}")
        print(f"  TP: {stats['TP']}, FP: {stats['FP']}, TN: {stats['TN']}, FN: {stats['FN']}")
        print(f"  准确率: {stats['accuracy']:.4f}")
        print(f"  精确率: {stats['precision']:.4f}")
        print(f"  召回率: {stats['recall']:.4f}")
        print(f"  F1分数: {stats['f1_score']:.4f}")
        print(f"  检测率: {stats['detection_rate']:.4f}")
        print(f"  误报率: {stats['false_alarm_rate']:.4f}")

        # 输出CWE统计
