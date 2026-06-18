---
layout: plain
title: 论文
lang: zh-CN
---
# 论文

<p class="pub-note">专利、论文和预印本。</p>

<div class="pub-list">

<div class="pub-card">
  <div class="pub-title">基于大语言模型协同的越南语依存句法数据增强</div>
  <div class="pub-authors"><strong>梅睿桐</strong></div>
  <div class="pub-venue"><span class="venue-badge">发明专利</span></div>
  <div class="pub-abstract">
    本发明提出了一种基于大语言模型协同的越南语依存句法数据增强方法。该方法利用多个当前主流大语言模型作为标注模型，生成越南语句子的初始依存句法树；再引入专家大语言模型 GPT-4o-mini 对每一轮输出进行打分与反馈，驱动标注模型迭代优化，直至达到设定阈值或最大轮数。对于每句话，系统从三个标注模型输出中自动选择评分最高的依存句法树，形成高质量合成越南语依存句法树，并与原始 UD 越南语训练集融合，用于训练句法分析模型。该方法面向低资源越南语依存句法分析，旨在通过高质量自动数据扩充提升分析性能。
    <br />
    申请号 CN202511034293.X；公开号 CN120930631A。
  </div>
  <div class="pub-links">
    <a href="https://d.wanfangdata.com.cn/patent/Ch1QYXRlbnROZXdTb2xyOVMyMDI2MDUyNTExNTQxNhIpWkxfQ04yMDI1MTEwMzQyOTMuWF9DTjEyMDkzMDYzMUFfMjAyNTExMTEaCHNvMjFiNWE1">万方</a>
  </div>
</div>

<div class="pub-card">
  <div class="pub-title">在研论文</div>
  <div class="pub-authors"><strong>梅睿桐</strong></div>
  <div class="pub-venue"><span class="venue-badge preprint">准备中</span></div>
  <div class="pub-abstract">
    当前研究关注如何识别中文分词金标准数据中的局部边界不一致问题，并探索如何结合小模型信号、大语言模型判断和人工复核，构建高效的数据修订流程。
  </div>
</div>

</div>
