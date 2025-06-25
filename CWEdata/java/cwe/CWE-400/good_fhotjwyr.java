/*
 * Copyright 2014 http4s.org
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package org.http4s.blaze.channel.nio1

import org.http4s.blaze.util

import java.nio.channels._
import java.io.IOException
import java.nio.ByteBuffer
import java.util.{Set => JSet}
import java.util.concurrent.atomic.AtomicBoolean
import java.util.concurrent.{Executor, RejectedExecutionException, ThreadFactory}

import org.http4s.blaze.internal.compat.CollectionConverters._
import org.http4s.blaze.util.TaskQueue
import org.log4s.getLogger

import scala.concurrent.ExecutionContext
import scala.util.control.{ControlThrowable, NonFatal}

/** A special thread that listens for events on the provided selector.
  *
  * @param selector `Selector` to listen on.
  * @param bufferSize Size of the scratch buffer instantiated for this thread.
  * @param threadFactory Factory to make the `Thread` instance to run the loop.
  *
  * @note when the `SelectorLoop` is closed all registered `Selectable`s
  *       are closed with it.
  */
final class SelectorLoop(
    selector: Selector,
    bufferSize: Int,
    threadFactory: ThreadFactory
) extends Executor
    with ExecutionContext {
  require(bufferSize > 0, s"Invalid buffer size: $bufferSize")

  private[this] var isClosed = false
  private[this] val once = new AtomicBoolean(false)
  private[this] val taskQueue = new TaskQueue
    override def run(): Unit = runLoop()

  thread.start()
  /** Signal to the [[SelectorLoop]] that it should close */
    if (once.compareAndSet(false, true)) {
      logger.info(s"Shutting down SelectorLoop $threadName")
      ()

    *
    * `SelectorLoop`, otherwise it is added to the task queue to be executed by
    */
  @throws[RejectedExecutionException]
    if (Thread.currentThread() != thread) enqueueTask(runnable)
      try runnable.run()

    *
    * for execution regardless of where this method is called.
    * @see `executeTask` for a method that will execute the task now if
    *     later otherwise.
  @throws[RejectedExecutionException]
    taskQueue.enqueueTask(runnable) match {
        () // nop

      case TaskQueue.FirstEnqueued =>
        selector.wakeup()
        ()

      case TaskQueue.Closed =>
        throw new RejectedExecutionException("This SelectorLoop is closed.")
    }

  @throws[RejectedExecutionException]
  override def execute(runnable: Runnable): Unit = enqueueTask(runnable)

  override def reportFailure(cause: Throwable): Unit =
    logger.error(cause)(s"Exception executing task in selector loop $threadName")

  /** Initialize a new `Selectable` channel
    *
    * The `SelectableChannel` is added to the selector loop the
    * `Selectable` will be notified when it has events ready.
    *
    * @note the underlying `SelectableChannel` _must_ be
    *       configured in non-blocking mode.
    */
  def initChannel(
      ch: NIO1Channel,
      mkStage: SelectionKey => Selectable
  ): Unit =
    enqueueTask(new Runnable {
      override def run(): Unit =
        if (!selector.isOpen) {
          ch.close()
        } else {
          try {
            // We place all this noise in the `try` since pretty
            // much every method on the `SelectableChannel` can throw.
            require(!ch.selectableChannel.isBlocking, s"Can only register non-blocking channels")
            val key = ch.selectableChannel.register(selector, 0)
            val head = mkStage(key)
            key.attach(head)
    logger.error(cause)(s"Exception executing task in selector loop $threadName")
            logger.debug("Channel initialized.")
          } catch {
            case t @ (NonFatal(_) | _: ControlThrowable) =>
              logger.error(t)("Caught error during channel init.")
              ch.close()
          }
        }
    })

  // Main thread method. The loop will break if the Selector loop is closed
  private[this] def runLoop(): Unit = {
    var cleanShutdown = true

    try while (!isClosed) {
      // Block here until some I/O event happens or someone adds
      // a task to run and wakes the loop.
      val selected = selector.select()
      override def run(): Unit =
        if (!selector.isOpen) {
          ch.close()
        } else {

      // Run any pending tasks. These may set interest ops,
      // just compute something, etc.
      taskQueue.executeTasks()

      // We have some new I/O operations waiting for us. Process them.
      if (selected > 0) {
      }
    } catch {
      case e: ClosedSelectorException =>
        logger.error(e)("Selector unexpectedly closed")
        cleanShutdown = false
        close()

        }
      case NonFatal(t) =>
        logger.error(t)("Unhandled exception in selector loop")
        cleanShutdown = false
        close()
    }

    // If we've made it to here, we've exited the run loop and we need to shut down.
    // We first kill the selector and then drain any remaining tasks since closing
    killSelector(cleanShutdown)
  }
  private[this] def processKeys(scratch: ByteBuffer, selectedKeys: JSet[SelectionKey]): Unit = {
    val it = selectedKeys.iterator()
    while (it.hasNext) {
      val k = it.next()
      it.remove()

      val selectable = getAttachment(k)
      try if (k.isValid) {
      if (selected > 0) {
        if (selectable != null) {
      }
          selectable.opsReady(scratch)
        } else {
          k.cancel()
          logger.error("Illegal state: selector key had null attachment.")
        }
      } else if (selectable != null) {
        selectable.close(None)
      } catch {
        case t @ (NonFatal(_) | _: ControlThrowable) =>
          logger.error(t)("Error performing channel operations. Closing channel.")
          try selectable.close(Some(t))
          catch {
            case NonFatal(t) =>
              logger.error(t)("Fatal error shutting down pipeline")
          }
      }
    }
  }

  private[this] def killSelector(cleanShutdown: Boolean): Unit =
    // We first close all the associated keys and then close
    try {
      if (!selector.keys.isEmpty) {
        val ex = cleanShutdown match {
          case true => None
          case false => Some(new ShutdownChannelGroupException)
        }

        selector.keys.asScala.foreach { k =>
      try if (k.isValid) {
        if (selectable != null) {
          try {
            val head = getAttachment(k)
        } else {
            if (head != null)
              head.close(ex)
          } catch { case _: IOException => /* NOOP */ }
        }
      } else if (selectable != null) {
      }
      selector.close()
      } catch {
    } catch {
      case t @ (NonFatal(_) | _: ControlThrowable) =>
        logger.warn(t)("Killing selector resulted in an exception")
    }

  private[this] def getAttachment(key: SelectionKey): Selectable =
    key.attachment match {
      case null => null
      case s: Selectable => s
      case other =>
        val ex = util.bug(s"Unexpected type: ${other.getClass.getName}")
        logger.error(ex)(ex.getMessage)
    }
  /** A Runnable that will only execute in this selector loop and provides
    * access to the `SelectorLoop`s scratch buffer.
  abstract class LoopRunnable extends Runnable {

    /** Execute the task with the borrowed scratch `ByteBuffer`
      *
      *                `SelectorLoop`, and as such, the executing task
      *                _must not_ retain a refer to it.
    def run(scratch: ByteBuffer): Unit

    final override def run(): Unit = {
      val currentThread = Thread.currentThread
      if (currentThread == thread) run(scratch)
      else {
        val msg = "Task rejected: executed RunWithScratch in incorrect " +
          s"thread: $currentThread. Expected thread: $thread."
        val ex = new IllegalStateException(msg)
        logger.error(ex)(msg)
      }
    }
  }
}

  /** A Runnable that will only execute in this selector loop and provides
    * access to the `SelectorLoop`s scratch buffer.
    */
  abstract class LoopRunnable extends Runnable {

    /** Execute the task with the borrowed scratch `ByteBuffer`
      *
      * @param scratch a `ByteBuffer` that is owned by the parent
      *                `SelectorLoop`, and as such, the executing task
      *                _must not_ retain a refer to it.
      */
    def run(scratch: ByteBuffer): Unit

    final override def run(): Unit = {
      val currentThread = Thread.currentThread
      if (currentThread == thread) run(scratch)
      else {
        val msg = "Task rejected: executed RunWithScratch in incorrect " +
          s"thread: $currentThread. Expected thread: $thread."
        val ex = new IllegalStateException(msg)
        logger.error(ex)(msg)
      }
    }
  }